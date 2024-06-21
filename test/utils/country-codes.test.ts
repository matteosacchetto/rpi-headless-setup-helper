import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { is_country_code_valid } from '@/utils/country-codes';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('is_country_code_valid', async () => {
    test('valid ISO-3166-1 country code', async () => {
      assert.ok(is_country_code_valid('IT'));
    });

    test('not valid ISO-3166-1 country code', async () => {
      assert.ok(!is_country_code_valid('EN'));
    });

    test('empty country code', async () => {
      assert.ok(!is_country_code_valid(''));
    });
  });
});
