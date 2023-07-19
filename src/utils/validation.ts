export const error_to_msg = <T extends unknown[], R>(
  fn: (...args: T) => R,
  ...params: T
) => {
  try {
    return fn(...params) as R;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    } else if (typeof e === 'string') {
      return e;
    } else {
      return 'unknown error';
    }
  }
};

export const async_error_to_msg = async <T extends unknown[], R>(
  fn: (...args: T) => R,
  ...params: T
) => {
  try {
    return (await fn(...params)) as R;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    } else if (typeof e === 'string') {
      return e;
    } else {
      return 'unknown error';
    }
  }
};
