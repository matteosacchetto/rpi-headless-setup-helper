import input from '@inquirer/input';
import confirm from '@inquirer/confirm';
import password from '@inquirer/password';
import { logger } from '@/logger';
import { get_country_from_locale, get_locale_country } from '@/utils/locale';
import { is_country_code_valid } from '@/utils/country-codes';
import chalk from 'chalk';
import { ssid_regex } from '@/const/regex';

export const wifi_prompt = async (mask?: string | undefined) => {
  const enable = await confirm({
    message: 'Enable WiFi',
    default: false,
  });

  if (!enable) {
    return {
      enable,
    };
  }

  const default_country_code = get_country_from_locale(get_locale_country());

  const country_code = await input({
    message: 'ISO-3166-1 country code',
    default: is_country_code_valid(default_country_code)
      ? default_country_code
      : '',
    validate(proposed_code: string) {
      if (!is_country_code_valid(proposed_code)) {
        return `Insert a valid 2 letter ISO 3166-1 country code ${chalk.gray.dim(
          `(https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)`
        )}`;
      }

      return true;
    },
  });

  const ssid = await input({
    message: 'SSID',
    validate(proposed_ssid: string) {
      if (proposed_ssid.match(ssid_regex)) {
        return true;
      }

      return `username MUST match the following regular expression: ${ssid_regex}`;
    },
  });

  let psk, confirm_psk;

  do {
    psk = await password({
      message: 'Password',
      mask,
      validate(proposed_psk: string) {
        if (proposed_psk.length >= 8 && proposed_psk.length < 63) {
          return true;
        }

        return 'Password must be 8..63 characters long';
      },
    });

    confirm_psk = await password({
      message: 'Confirm password',
      mask,
      validate(proposed_psk: string) {
        if (proposed_psk.length >= 8 && proposed_psk.length < 63) {
          return true;
        }

        return 'Password must be 8..63 characters long';
      },
    });

    if (psk !== confirm_psk) {
      logger.error('Passwords do not match');
    }
  } while (psk !== confirm_psk);

  return {
    enable,
    country_code,
    ssid,
    psk,
  };
};
