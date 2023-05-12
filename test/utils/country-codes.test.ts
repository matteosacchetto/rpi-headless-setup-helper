import { is_country_code_valid } from '@/utils/country-codes';
import t from 'tap';

t.test('valid ISO-3166-1 country code', async (t) => {
  t.ok(is_country_code_valid('IT'));
});

t.test('not valid ISO-3166-1 country code', async (t) => {
  t.notOk(is_country_code_valid('EN'));
});

t.test('empty country code', async (t) => {
  t.notOk(is_country_code_valid(''));
});