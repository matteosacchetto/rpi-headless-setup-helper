import { logger } from '@/logger';

export const exit_success = async <T extends unknown[], R>(
  fn: (...params: T) => R,
  ...params: T
) => {
  try {
    await fn(...params);
  } catch (e) {
    const indentation = logger.indentation;
    logger.indent(indentation + 2);
    logger.dimmed_error(e instanceof Error ? e.message : e);
    logger.indent(indentation);
  } finally {
    process.exit(0);
  }
};

export const exit_fail = async <T extends unknown[], R>(
  fn: (...params: T) => R,
  ...params: T
) => {
  try {
    await fn(...params);
  } catch (e) {
    const indentation = logger.indentation;
    logger.indent(indentation + 2);
    logger.dimmed_error(e instanceof Error ? e.message : e);
    logger.indent(indentation);
  } finally {
    process.exit(1);
  }
};

export const exit_success_on_error = async <T extends unknown[], R>(
  fn: (...params: T) => R,
  ...params: T
) => {
  try {
    await fn(...params);
  } catch (e) {
    const indentation = logger.indentation;
    logger.indent(indentation + 2);
    logger.dimmed_error(e instanceof Error ? e.message : e);
    logger.indent(indentation);
    process.exit(0);
  }
};

export const exit_fail_on_error = async <T extends unknown[], R>(
  fn: (...params: T) => R,
  ...params: T
) => {
  try {
    await fn(...params);
  } catch (e) {
    const indentation = logger.indentation;
    logger.indent(indentation + 2);
    logger.dimmed_error(e instanceof Error ? e.message : e);
    logger.indent(indentation);
    process.exit(2);
  }
};
