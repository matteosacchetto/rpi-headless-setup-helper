import { config_overwrite } from '@/config/config-overwrite';
import { wifi_config } from '@/config/wifi';
import { createCommand } from '@/utils/commands';
import { exit_fail_on_error } from '@/utils/process';
import { validation_spinner } from '@/validation/validation-spinner';
import {
  validate_country_code,
  validate_psk,
  validate_ssid,
} from '@/validation/wifi';

const name = 'wifi';
const description = 'create WiFi headless setup file';

const wifi_command = createCommand(name, description)
  .requiredOption(
    '-c, --country <country_code>',
    'specify the 2 digit ISO-3166 country code'
  )
  .requiredOption('-i, --id <ssid>', 'speficy the SSID')
  .requiredOption('-p, --psk <psk>', 'specify the psk')
  .option('-y, --yes', 'overwrite file if exists', false)
  .option(
    '-s, --script',
    'it will run it as a script and will disable every interactive prompt',
    false
  );

wifi_command.action(async (options) => {
  await exit_fail_on_error(async () => {
    await validation_spinner({
      name: 'country',
      value: options.country,
      fn: async () => validate_country_code(options.country),
    });

    await validation_spinner({
      name: 'SSID',
      value: options.id,
      fn: async () => validate_ssid(options.id),
    });

    await validation_spinner({
      name: 'psk',
      value: '***',
      fn: async () => validate_psk(options.psk),
    });
  });

  await exit_fail_on_error(async () => {
    await config_overwrite({
      name: `WiFi`,
      fn: async (overwrite: boolean) =>
        await wifi_config({
          country_code: options.country,
          ssid: options.id,
          psk: options.psk,
          overwrite,
        }),
      overwrite: options.yes,
      retry: !options.script,
    });
  });
});

export default wifi_command;
