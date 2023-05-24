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
