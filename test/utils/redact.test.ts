import { deep_redact } from '@/utils/redact';
import t from 'tap';

t.test('deep redact object (no recursion)', async (t) => {
  t.same(
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

t.test('deep redact object (recursion)', async (t) => {
  t.same(
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
      }
    }
  );
});

t.test('deep redact object (different mask)', async (t) => {
  t.same(
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