import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { get_country_from_locale, get_locale_country } from '@/utils/locale';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('get_country_from_locale', async () => {
    test('get country from "en-US"', async () => {
      assert.strictEqual(get_country_from_locale('en-US'), 'US');
    });

    test('get country from "en"', async () => {
      assert.strictEqual(get_country_from_locale('en'), '');
    });

    test('get country from ""', async () => {
      assert.strictEqual(get_country_from_locale(''), '');
    });
  });

  describe('get_locale_country', async () => {
    test('get locale', async () => {
      assert.strictEqual(
        get_locale_country(),
        Intl.DateTimeFormat().resolvedOptions().locale
      );
    });
  });
});
