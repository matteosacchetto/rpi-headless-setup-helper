import { get_country_from_locale, get_locale_country } from '@/utils/locale';
import t from 'tap';

t.test('get country from "en-US"', async (t) => {
  t.equal(get_country_from_locale('en-US'), 'US');
});

t.test('get country from "en"', async (t) => {
  t.equal(get_country_from_locale('en'), '');
});

t.test('get country from ""', async (t) => {
  t.equal(get_country_from_locale(''), '');
});

t.test('get locale', async (t) => {
  t.equal(get_locale_country(), Intl.DateTimeFormat().resolvedOptions().locale);
});
