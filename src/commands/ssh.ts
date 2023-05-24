import { config_overwrite } from '@/config/config-overwrite';
import { ssh_config } from '@/config/ssh';
import { createCommand } from '@/utils/commands';
import { exit_fail_on_error } from '@/utils/process';

const name = 'ssh';
const description = 'create SSH headless setup file';

const ssh_command = createCommand(name, description)
  .option('-y, --yes', 'overwrite file if exists', false)
  .option(
    '-s, --script',
    'it will run it as a script and will disable every interactive prompt',
    false
  );

ssh_command.action(async (options) => {
  await exit_fail_on_error(async () => {
    await config_overwrite({
      name: `SSH`,
      fn: async (overwrite: boolean) => await ssh_config({ overwrite }),
      overwrite: options.yes,
      retry: !options.script,
    });
  });
});

export default ssh_command;
