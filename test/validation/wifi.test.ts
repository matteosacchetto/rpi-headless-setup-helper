import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { ValidationError } from '@/errors/validation-error';
import { iso_3166_codes } from '@/utils/country-codes';
import {
  validate_country_code,
  validate_psk,
  validate_ssid,
} from '@/validation/wifi';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('validate_country_code', async () => {
    test('valid country code', async (t) => {
      assert.ok(validate_country_code('US'));
    });

    test('all iso3166 country code', async (t) => {
      for (const code of iso_3166_codes) {
        assert.ok(validate_country_code(code));
      }
    });

    test('invalid country code', async (t) => {
      assert.throws(() => validate_country_code('EN'), ValidationError);
    });
  });

  describe('validate_ssid', async () => {
    test('valid SSID', async (t) => {
      assert.ok(validate_ssid('SSID'));
    });

    test('invalid SSID', async (t) => {
      assert.throws(() => validate_ssid(''), ValidationError);
    });
  });

  describe('validate_psk', async () => {
    test('valid PSK', async (t) => {
      assert.ok(validate_psk('12345678'));
    });

    test('invalid PSK', async (t) => {
      assert.throws(() => validate_psk('12345'), ValidationError);
    });

    test('invalid PSK', async (t) => {
      assert.throws(
        () =>
          validate_psk(
            '12345123451234512345123451234512345123451234512345123451234512345123451234'
          ),
        ValidationError
      );
    });
  });
});
