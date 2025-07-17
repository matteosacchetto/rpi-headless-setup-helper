import chalk from 'chalk';
import { spinner_wrapper } from '@/utils/spinner-wrapper';

export const check_dependency_spinner = async (dependency: {
  name: string;
  exists: () => Promise<boolean>;
}) => {
  await spinner_wrapper({
    spinner_text: `${chalk.bold('Checking dependency')} ${chalk.gray(
      `${dependency.name}`
    )}`,
    success_text: `${chalk.bold('Checking dependency')} ${chalk.green(
      `${dependency.name}`
    )}`,
    fail_text: `${chalk.bold('Checking dependency')} ${chalk.red(
      `${dependency.name}`
    )}`,
    fn: async () => await dependency.exists(),
  });
};
