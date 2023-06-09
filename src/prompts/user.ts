import { logger } from '@/logger';
import { error_to_msg } from '@/utils/validation';
import { validate_username } from '@/validation/user';
import confirm from '@inquirer/confirm';
import input from '@inquirer/input';
import password from '@inquirer/password';
import { User } from './types';

export const user_prompt = async (mask?: string | undefined) => {
  const enable = await confirm({
    message: 'Add a user',
    default: true,
  });

  if (!enable) {
    return { enable };
  }
  const username = await input({
    message: 'Username',
    validate: (proposed_username) =>
      error_to_msg(() => validate_username(proposed_username)),
  });

  let pwd, confirm_pwd;

  do {
    pwd = await password({
      message: 'Password',
      mask,
    });

    confirm_pwd = await password({
      message: 'Confirm password',
      mask,
    });

    if (pwd !== confirm_pwd) {
      logger.error('Passwords do not match');
    }
  } while (pwd !== confirm_pwd);

  return <User>{
    enable,
    username,
    password: pwd,
  };
};
