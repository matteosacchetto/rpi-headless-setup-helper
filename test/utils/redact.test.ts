import assert from 'node:assert';
import { join, relative } from 'node:path';
import { describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { deep_redact } from '@/utils/redact';

const filename = relative(
  join(process.cwd(), 'test'),
  fileURLToPath(import.meta.url)
).replace('.test', '');

describe(filename, async () => {
  describe('deep_redact', async () => {
    test('deep redact object (no recursion)', async (t) => {
      assert.deepStrictEqual(
        deep_redact(
          {
            name: 'test_name',
            password: 'test_password',
          },
          ['password']
        ),
        {
          name: 'test_name',
          password: '***',
        }
      );
    });

    test('deep redact object (recursion)', async (t) => {
      assert.deepStrictEqual(
        deep_redact(
          {
            name: 'test_name',
            password: 'test_password',
            sub_obj: {
              name: 'test_name',
              password: 'test_password',
            },
          },
          ['password']
        ),
        {
          name: 'test_name',
          password: '***',
          sub_obj: {
            name: 'test_name',
            password: '***',
          },
        }
      );
    });

    test('deep redact object (different mask)', async (t) => {
      assert.deepStrictEqual(
        deep_redact(
          {
            name: 'test_name',
            password: 'test_password',
          },
          ['password'],
          '[hidden]'
        ),
        {
          name: 'test_name',
          password: '[hidden]',
        }
      );
    });
  });
});
