import ora, { type Ora } from 'ora';

export const spinner_wrapper = async ({
  spinner_text,
  success_text,
  fail_text,
  fn,
}: {
  spinner_text: string;
  success_text?: string;
  fail_text?: string;
  fn: (spinner: Ora) => PromiseLike<unknown>;
}) => {
  const spinner = ora(spinner_text);
  try {
    spinner.start();
    await fn(spinner);
    spinner.succeed(success_text);
  } catch (e) {
    spinner.fail(fail_text);
    throw e;
  }
};
