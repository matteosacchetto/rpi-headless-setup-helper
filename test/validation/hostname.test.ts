import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { validate_hostname } from '@/validation/hostname';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('validate_hostname', async () => {
    test('valid hostname', async () => {
      assert.ok(validate_hostname('raspberrypi'));
    });

    test('invalid hostname', async () => {
      assert.throws(() => validate_hostname('raspberry_pi'));
    });
  });
});
