import chalk from 'chalk';
import { spinner_wrapper } from '@/utils/spinner-wrapper';

export const validation_spinner = async ({
  name,
  value,
  fn,
}: {
  name: string;
  value: string;
  fn: () => Promise<unknown>;
}) => {
  await spinner_wrapper({
    spinner_text: `${chalk.bold(`Validating ${name}`)} ${chalk.gray(
      `${value}`
    )}`,
    success_text: `${chalk.bold(`Validating ${name}`)} ${chalk.green(
      `${value}`
    )}`,
    fail_text: `${chalk.bold(`Validating ${name}`)} ${chalk.red(`${value}`)}`,
    fn,
  });
};
