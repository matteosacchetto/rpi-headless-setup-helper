import { throw_if_file_exists } from '@/utils/fs';
import { writeFile } from 'node:fs/promises';

/**
 * For headless setup, SSH can be enabled by placing a file named ssh, without any extension, onto the boot partition of the SD Card.
 *
 * @link https://www.raspberrypi.com/documentation/computers/configuration.html#setting-up-a-headless-raspberry-pi
 */
export const ssh_config = async ({
  overwrite = false,
}: {
  overwrite?: boolean;
} = {}) => {
  const file = 'ssh';
  if (!overwrite) {
    await throw_if_file_exists(file);
  }

  await writeFile(file, '');
};
