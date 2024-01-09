import { spinner_wrapper } from '@/utils/spinner-wrapper';
import chalk from 'chalk';

export const config_spinner = async ({
  name,
  fn,
}: {
  name: string;
  fn: () => Promise<unknown>;
}) => {
  await spinner_wrapper({
    spinner_text: `${chalk.bold('Creating')} ${chalk.gray(
      `${name} config file`
    )}`,
    success_text: `${chalk.bold('Creating')} ${chalk.green(
      `${name} config file`
    )}`,
    fail_text: `${chalk.bold('Creating')} ${chalk.red(`${name} config file`)}`,
    fn,
  });
};
