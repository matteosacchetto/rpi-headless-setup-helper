import { user_regex } from '@/const/regex';
import { logger } from '@/logger';
import confirm from '@inquirer/confirm';
import input from '@inquirer/input';
import password from '@inquirer/password';

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
    validate(proposed_username: string) {
      if (proposed_username.match(user_regex)) {
        return true;
      }

      return `username MUST match the following regular expression: ${user_regex}`;
    },
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

  return {
    enable,
    username,
    password: pwd,
  };
};
