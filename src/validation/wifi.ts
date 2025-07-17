import chalk from 'chalk';
import { ssid_regex } from '@/const/regex';
import { ValidationError } from '@/errors/validation-error';
import { is_country_code_valid } from '@/utils/country-codes';

export const validate_country_code = (country_code: string) => {
  if (!is_country_code_valid(country_code)) {
    throw new ValidationError(
      `Insert a valid 2 letter ISO 3166-1 country code ${chalk.gray.dim(
        '(https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)'
      )}`
    );
  }

  return true;
};

export const validate_ssid = (ssid: string) => {
  if (ssid.match(ssid_regex)) {
    return true;
  }

  throw new ValidationError(
    `SSID MUST match the following regular expression: ${ssid_regex}`
  );
};

export const validate_psk = (psk: string) => {
  if (psk.length >= 8 && psk.length < 63) {
    return true;
  }

  throw new ValidationError('Password must be 8..63 characters long');
};
