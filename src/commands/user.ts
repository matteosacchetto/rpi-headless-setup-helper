import { config_overwrite } from '@/config/config-overwrite';
import { user_config } from '@/config/user';
import { check_dependency_spinner } from '@/dependencies/check-dependency-spinner';
import { openssl } from '@/dependencies/openssl';
import { createCommand } from '@/utils/commands';
import { exit_fail_on_error } from '@/utils/process';
import { validate_username } from '@/validation/user';
import { validation_spinner } from '@/validation/validation-spinner';

const name = 'user';
const description = 'create user headless setup file';

const user_command = createCommand(name, description)
  .requiredOption('-u, --username <username>', 'specify the username')
  .requiredOption('-p, --password <password>', 'specify the password')
  .option('-y, --yes', 'overwrite file if exists', false)
  .option(
    '-s, --script',
    'it will run it as a script and will disable every interactive prompt',
    false
  );

user_command.action(async (options) => {
  await exit_fail_on_error(async () => {
    await check_dependency_spinner(openssl);
  });

  await exit_fail_on_error(async () => {
    await validation_spinner({
      name: 'username',
      value: options.username,
      fn: async () => validate_username(options.username),
    });
  });

  await exit_fail_on_error(async () => {
    await config_overwrite({
      name: `user`,
      fn: async (overwrite: boolean) =>
        await user_config({
          username: options.username,
          password: options.password,
          overwrite,
        }),
      overwrite: options.yes,
      retry: !options.script,
    });
  });
});

export default user_command;
