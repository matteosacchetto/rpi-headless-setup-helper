import { writeFile } from 'node:fs/promises';
import { passphrase } from '@/utils/crypto';
import { throw_if_file_exists } from '@/utils/fs';

/**
 * To add the wifi configuration add a `wpa_supplicant.conf` file in the boot partition of the SD card.
 * This file should contain the following template populated with the correct values
 *
 * The basic template is the following
 * ```
 * ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
 * country=<Insert 2 letter ISO 3166-1 country code here>
 * update_config=1
 *
 * network={
 *   ssid="<Name of your wireless LAN>"
 *   psk="<Password for your wireless LAN>"
 * }
 * ```
 *
 * @link https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-networking-2
 */
export const wifi_config = async ({
  country_code,
  ssid,
  psk,
  overwrite = false,
}: {
  country_code: string;
  ssid: string;
  psk: string;
  overwrite?: boolean;
}) => {
  const file = 'wpa_supplicant.conf';
  if (!overwrite) {
    await throw_if_file_exists(file);
  }

  const psk_passphrase = await passphrase({ ssid, psk });

  const content =
    // biome-ignore lint/style/useTemplate: much more readable this way
    'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n' +
    `country=${country_code}\n` +
    'update_config=1\n' +
    '\n' +
    'network={\n' +
    `  ssid="${ssid}"\n` +
    `  #psk="${psk}"\n` +
    `  psk=${psk_passphrase}\n` +
    '}\n';

  await writeFile(file, content);
};
