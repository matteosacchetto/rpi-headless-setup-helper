import { advanced_config } from '@/config/advanced';
import { config_overwrite } from '@/config/config-overwrite';
import { createCommand } from '@/utils/commands';
import { exit_fail_on_error } from '@/utils/process';
import { validate_hostname } from '@/validation/hostname';
import { validate_kbd_layout } from '@/validation/kbd-layout';
import { validate_key_path } from '@/validation/ssh';
import { validate_timezone } from '@/validation/timezone';
import { validation_spinner } from '@/validation/validation-spinner';

const name = 'advanced';
const description = 'create advanced headless setup file';

const advanced_command = createCommand(name, description)
  .requiredOption('-t, --timezone <timezone>', 'set the timezone')
  .requiredOption('-l, --kbd-layout <kbd_layout>', 'set the keyboard layout')
  .option(
    '-k, --ssh-key <path_to_key>',
    'specify the path to the public SSH key'
  )
  .option(
    '-d, --ssh-password-disable',
    'disable password authentication for SSH',
    false
  )
  .option('-h, --hostname <hostname>', 'set the hostname', 'raspberrypi')
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
      value: options.kbdLayout,
      fn: async () => validate_kbd_layout(options.kbdLayout),
    });

    if (options.sshKey) {
      await validation_spinner({
        name: 'timezone',
        value: options.sshKey,
        fn: async () => validate_key_path(options.sshKey!),
      });
    } else if (options.sshPasswordDisable) {
      await validation_spinner({
        name: 'SSH disable password',
        value: `${options.sshPasswordDisable}`,
        fn: async () => {
          throw new Error(
            'to disable SSH password login you MUST provide an SSH key'
          );
        },
      });
    }
  });

  await exit_fail_on_error(async () => {
    await config_overwrite({
      name: 'advanced',
      fn: async (overwrite: boolean) =>
        await advanced_config({
          overwrite,
          hostname: options.hostname,
          timezone: options.timezone,
          kbd_layout: options.kbdLayout,
          ssh: {
            key_path: options.sshKey,
            disable_password_login: options.sshPasswordDisable,
          },
        }),
      overwrite: options.yes,
      retry: !options.script,
    });
  });
});

export default advanced_command;
