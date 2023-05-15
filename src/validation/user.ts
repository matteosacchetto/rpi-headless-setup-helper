import { user_regex } from '@/const/regex';
import { ValidationError } from '@/errors/validation-error';

export const validate_username = (username: string) => {
  if (username.match(user_regex)) {
    return true;
  }

  throw new ValidationError(
    `username MUST match the following regular expression: ${user_regex}`
  );
};
