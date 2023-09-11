import { exit_success_on_error_ignore } from '@/utils/process';
import confirm from '@inquirer/confirm';

export const confirm_overwrite_prompt = async () => {
  const confirm_overwrite = await exit_success_on_error_ignore(
    async () =>
      await confirm({
        message: 'Do you want to overwrite it?',
        default: false,
      })
  );

  return confirm_overwrite;
};
