import t from 'tap';
import { validate_username } from '@/validation/user';
import { ValidationError } from '@/errors/validation-error';

t.test('valid username', async (t) => {
  t.ok(validate_username('test'));
});

t.test('valid username', async (t) => {
  t.ok(validate_username('_test'));
});

t.test('invalid username', async (t) => {
  t.throws(() => validate_username('TEST'), ValidationError);
});

t.test('invalid username 2', async (t) => {
  t.throws(() => validate_username('*test'), ValidationError);
});
