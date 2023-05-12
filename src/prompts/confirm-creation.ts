import { logger } from '@/logger';
import confirm from '@inquirer/confirm';
import chalk from 'chalk';

export const confirm_creation_prompt = async (
  redacted_configuration: Record<string, unknown>
) => {
  logger.info(chalk.bold('Configuration'));
  logger.log(redacted_configuration);

  const confirm_creation = (await confirm({
    message: 'Proceed with the creation of configuration files',
    default: true,
  })) as boolean;

  return confirm_creation;
};
