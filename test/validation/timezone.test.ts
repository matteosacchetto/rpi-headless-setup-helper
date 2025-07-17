import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { validate_timezone } from '@/validation/timezone';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('validate_timezone', async () => {
    test('valid timezone', async () => {
      assert.ok(validate_timezone('America/New_York'));
    });

    test('invalid timezone', async () => {
      assert.throws(() => validate_timezone('America/NewYork'));
    });
  });
});
