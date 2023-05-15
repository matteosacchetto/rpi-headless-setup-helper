import t from 'tap';
import { iso_3166_codes } from '@/utils/country-codes';
import {
  validate_country_code,
  validate_psk,
  validate_ssid,
} from '@/validation/wifi';
import { ValidationError } from '@/errors/validation-error';

t.test('valid country code', async (t) => {
  t.ok(validate_country_code('US'));
});

t.test('all iso3166 country code', async (t) => {
  for (const code of iso_3166_codes) {
    t.ok(validate_country_code(code));
  }
});

t.test('invalid country code', async (t) => {
  t.throws(() => validate_country_code('EN'), ValidationError);
});

t.test('valid SSID', async (t) => {
  t.ok(validate_ssid('SSID'));
});

t.test('invalid SSID', async (t) => {
  t.throws(() => validate_ssid(''), ValidationError);
});

t.test('valid PSK', async (t) => {
  t.ok(validate_psk('12345678'));
});

t.test('invalid PSK', async (t) => {
  t.throws(() => validate_psk('12345'), ValidationError);
});

t.test('invalid PSK', async (t) => {
  t.throws(
    () =>
      validate_psk(
        '12345123451234512345123451234512345123451234512345123451234512345123451234'
      ),
    ValidationError
  );
});
