import confirm from '@inquirer/confirm';
import { SSH } from './types';

export const ssh_prompt = async () => {
  const enable = await confirm({
    message: 'Enable SSH',
    default: true,
  });

  return <SSH>{
    enable,
  };
};
