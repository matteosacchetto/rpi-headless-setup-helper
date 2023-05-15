import { user_regex } from '@/const/regex';

export const validate_username = (username: string) => {
  if (username.match(user_regex)) {
    return true;
  }

  return `username MUST match the following regular expression: ${user_regex}`;
};
