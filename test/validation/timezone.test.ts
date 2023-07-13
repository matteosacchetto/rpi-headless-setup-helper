import { validate_timezone } from '@/validation/timezone';
import t from 'tap';

t.test('valid timezone', async (t) => {
  t.ok(validate_timezone('America/New_York'));
});

t.test('invalid timezone', async (t) => {
  t.throws(() => validate_timezone('America/NewYork'));
});
