import input from '@inquirer/input';
import confirm from '@inquirer/confirm';
import password from '@inquirer/password';
import { logger } from '@/logger';
import { get_country_from_locale, get_locale_country } from '@/utils/locale';
import { is_country_code_valid } from '@/utils/country-codes';
import {
  validate_country_code,
  validate_psk,
  validate_ssid,
} from '@/validation/wifi';
import { error_to_msg } from '@/utils/validation';
import { WiFi } from './types';

export const wifi_prompt = async (mask?: string | undefined) => {
  const enable = await confirm({
    message: 'Enable WiFi',
    default: false,
  });

  if (!enable) {
    return { enable };
  }

  const default_country_code = get_country_from_locale(get_locale_country());

  const country_code = await input({
    message: 'ISO-3166-1 country code',
    default: is_country_code_valid(default_country_code)
      ? default_country_code
      : '',
    validate: (proposed_code: string) =>
      error_to_msg(() => validate_country_code(proposed_code)),
  });

  const ssid = await input({
    message: 'SSID',
    validate: (proposed_ssid: string) =>
      error_to_msg(() => validate_ssid(proposed_ssid)),
  });

  let psk, confirm_psk;

  do {
    psk = await password({
      message: 'Password',
      mask,
      validate: (proposed_psk: string) =>
        error_to_msg(() => validate_psk(proposed_psk)),
    });

    confirm_psk = await password({
      message: 'Confirm password',
      mask,
      validate: (proposed_psk: string) =>
        error_to_msg(() => validate_psk(proposed_psk)),
    });

    if (psk !== confirm_psk) {
      logger.error('Passwords do not match');
    }
  } while (psk !== confirm_psk);

  return <WiFi>{
    enable,
    country_code,
    ssid,
    psk,
  };
};
