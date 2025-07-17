import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { ValidationError } from '@/errors/validation-error';
import { validate_username } from '@/validation/user';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('validate_username', async () => {
    assert.strictEqual(1, 1);
    test('valid username', async () => {
      assert.ok(validate_username('test'));
    });

    test('valid username', async () => {
      assert.ok(validate_username('_test'));
    });

    test('invalid username', async () => {
      assert.throws(() => validate_username('TEST'), ValidationError);
    });

    test('invalid username 2', async () => {
      assert.throws(() => validate_username('*test'), ValidationError);
    });
  });
});
