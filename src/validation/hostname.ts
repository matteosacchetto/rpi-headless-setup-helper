import { hostname_regex } from '@/const/regex';
import { ValidationError } from '@/errors/validation-error';

export const validate_hostname = (hostname: string) => {
  if (hostname.match(hostname_regex)) {
    return true;
  }

  throw new ValidationError(
    `hostname MUST match the following regular expression: ${hostname_regex}`
  );
};
