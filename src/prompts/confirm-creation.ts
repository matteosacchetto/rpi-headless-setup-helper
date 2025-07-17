import confirm from '@inquirer/confirm';
import chalk from 'chalk';
import { logger } from '@/logger';
import { exit_success_on_error_ignore } from '@/utils/process';

export const confirm_creation_prompt = async (
  redacted_configuration: Record<string, unknown>
) => {
  logger.info(chalk.bold('Configuration'));
  logger.log(redacted_configuration);

  const confirm_creation = await exit_success_on_error_ignore(
    async () =>
      await confirm({
        message: 'Proceed with the creation of configuration files',
        default: true,
      })
  );

  return confirm_creation;
};
