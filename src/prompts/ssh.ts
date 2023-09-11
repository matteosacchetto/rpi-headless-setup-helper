import confirm from '@inquirer/confirm';
import { SSH } from './types';
import { exit_success_on_error_ignore } from '@/utils/process';

export const ssh_prompt = async () => {
  const enable = await exit_success_on_error_ignore(
    async () =>
      await confirm({
        message: 'Enable SSH',
        default: true,
      })
  );

  return <SSH>{
    enable,
  };
};
