import { validate_hostname } from '@/validation/hostname';
import t from 'tap';

t.test('valid hostname', async (t) => {
  t.ok(validate_hostname('raspberrypi'));
});

t.test('invalid hostname', async (t) => {
  t.throws(() => validate_hostname('raspberry_pi'));
});
