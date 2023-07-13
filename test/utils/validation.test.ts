import { async_error_to_msg, error_to_msg } from '@/utils/validation';
import t from 'tap';

t.test('error to msg (true)', async (t) => {
  t.ok(error_to_msg(() => true));
});

t.test('error to msg (false)', async (t) => {
  t.notOk(error_to_msg(() => false));
});

t.test('error to msg (true)', async (t) => {
  t.ok(error_to_msg((flag: boolean) => flag, true));
});

t.test('error to msg (false)', async (t) => {
  t.notOk(error_to_msg((flag: boolean) => flag, false));
});

t.test('error to msg (false)', async (t) => {
  const resposne = error_to_msg(() => {
    throw new Error('a');
  });

  t.type(resposne, 'string');
  t.same(resposne, 'a');
});

t.test('error to msg (false)', async (t) => {
  const resposne = error_to_msg(() => {
    throw 'a';
  });

  t.type(resposne, 'string');
  t.same(resposne, 'a');
});

t.test('error to msg (false)', async (t) => {
  const resposne = error_to_msg(() => {
    throw 1;
  });

  t.type(resposne, 'string');
  t.same(resposne, 'unknown error');
});

t.test('async error to msg (true)', async (t) => {
  t.ok(await async_error_to_msg(async () => true));
});

t.test('async error to msg (false)', async (t) => {
  t.notOk(await async_error_to_msg(async () => false));
});

t.test('async error to msg (true)', async (t) => {
  t.ok(await async_error_to_msg(async (flag: boolean) => flag, true));
});

t.test('async error to msg (false)', async (t) => {
  t.notOk(await async_error_to_msg(async (flag: boolean) => flag, false));
});

t.test('async error to msg (false)', async (t) => {
  const resposne = await async_error_to_msg(async () => {
    throw new Error('a');
  });

  t.type(resposne, 'string');
  t.same(resposne, 'a');
});

t.test('async error to msg (false)', async (t) => {
  const resposne = await async_error_to_msg(async () => {
    throw 'a';
  });

  t.type(resposne, 'string');
  t.same(resposne, 'a');
});

t.test('async error to msg (false)', async (t) => {
  const resposne = await async_error_to_msg(async () => {
    throw 1;
  });

  t.type(resposne, 'string');
  t.same(resposne, 'unknown error');
});
