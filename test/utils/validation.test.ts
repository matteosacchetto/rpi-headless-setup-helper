import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { async_error_to_msg, error_to_msg } from '@/utils/validation';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('error_to_msg', async () => {
    test('error to msg (true)', async () => {
      assert.ok(error_to_msg(() => true));
    });

    test('error to msg (false)', async () => {
      assert.ok(!error_to_msg(() => false));
    });

    test('error to msg (true)', async () => {
      assert.ok(error_to_msg((flag: boolean) => flag, true));
    });

    test('error to msg (false)', async () => {
      assert.ok(!error_to_msg((flag: boolean) => flag, false));
    });

    test('error to msg (false)', async () => {
      const resposne = error_to_msg(() => {
        throw new Error('a');
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'a');
    });

    test('error to msg (false)', async () => {
      const resposne = error_to_msg(() => {
        throw 'a';
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'a');
    });

    test('error to msg (false)', async () => {
      const resposne = error_to_msg(() => {
        throw 1;
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'unknown error');
    });
  });

  describe('async_error_to_msg', async () => {
    test('async error to msg (true)', async () => {
      assert.ok(await async_error_to_msg(async () => true));
    });

    test('async error to msg (false)', async () => {
      assert.ok(!(await async_error_to_msg(async () => false)));
    });

    test('async error to msg (true)', async () => {
      assert.ok(await async_error_to_msg(async (flag: boolean) => flag, true));
    });

    test('async error to msg (false)', async () => {
      assert.ok(
        !(await async_error_to_msg(async (flag: boolean) => flag, false))
      );
    });

    test('async error to msg (false)', async () => {
      const resposne = await async_error_to_msg(async () => {
        throw new Error('a');
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'a');
    });

    test('async error to msg (false)', async () => {
      const resposne = await async_error_to_msg(async () => {
        throw 'a';
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'a');
    });

    test('async error to msg (false)', async () => {
      const resposne = await async_error_to_msg(async () => {
        throw 1;
      });

      assert.strictEqual(typeof resposne, 'string');
      assert.strictEqual(resposne, 'unknown error');
    });
  });
});
