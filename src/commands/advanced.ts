import { config_overwrite } from '@/config/config-overwrite';
import { advanced_config } from '@/config/advanced';
import { createCommand } from '@/utils/commands';
import { exit_fail_on_error } from '@/utils/process';
import { validation_spinner } from '@/validation/validation-spinner';
import { validate_timezone } from '@/validation/timezone';
import { validate_kbd_layout } from '@/validation/kbd_layout';
import { validate_key_path } from '@/validation/ssh';
import { validate_hostname } from '@/validation/hostname';

const name = 'advanced';
const description = 'create advanced headless setup file';

const advanced_command = createCommand(name, description)
  .requiredOption('-t, --timezone <timezone>', 'set the timezone')
  .requiredOption('-k, --kbd <kbd_layout>', 'set the keyboard layout')
  .option(
    '-s, --ssh-key <path_to_key>',
    'specify the path to the public SSH key'
  )
  .option(
    '-d, --ssh-password-disable',
    'disable password authentication for SSH',
    false
  )
  .option('-n, --hostname <hostname>', 'set the hostname', 'raspberrypi')
  .option('-y, --yes', 'overwrite file if exists', false)
  .option(
    '-s, --script',
    'it will run it as a script and will disable every interactive prompt',
    false
  );

advanced_command.action(async (options) => {
  await exit_fail_on_error(async () => {
    await validation_spinner({
      name: 'hostname',
      value: options.hostname,
      fn: async () => validate_hostname(options.hostname),
    });

    await validation_spinner({
      name: 'timezone',
      value: options.timezone,
      fn: async () => validate_timezone(options.timezone),
    });

    await validation_spinner({
      name: 'keyboard layout',
      value: options.kbd,
      fn: async () => validate_kbd_layout(options.kbd),
    });

    if(options.sshKey) {
      await validation_spinner({
        name: 'timezone',
        value: options.sshKey,
        fn: async () => validate_key_path(options.sshKey!),
      });
    }
  });

  await exit_fail_on_error(async () => {
    await config_overwrite({
      name: `SSH`,
      fn: async (overwrite: boolean) =>
        await advanced_config({
          overwrite,
          hostname: options.hostname,
          timezone: options.timezone,
          kbd_layout: options.kbd,
          ssh: {
            key_path: options.sshKey,
            disable_password_login: options.sshPasswordDisable
          }
        }),
      overwrite: options.yes,
      retry: !options.script,
    });
  });
});

export default advanced_command;
