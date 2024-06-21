import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { validate_kbd_layout } from '@/validation/kbd-layout';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('validate_kbd_layout', async () => {
    test('valid keyboard layout', async () => {
      assert.ok(validate_kbd_layout('us'));
    });

    test('invalid keyboard layout', async () => {
      assert.throws(() => validate_kbd_layout('en'));
    });
  });
});
