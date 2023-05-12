import { FileExistsError } from '@/errors/file-exists-error';
import { logger } from '@/logger';
import { confirm_overwrite_prompt } from '@/prompts/confirm-overwrite';
import { config_spinner } from './config-spinner';

export const config_overwrite = async ({
  name,
  fn,
  overwrite,
}: {
  name: string;
  fn: (overwrite: boolean) => Promise<unknown>;
  overwrite: boolean;
}) => {
  try {
    await config_spinner({
      name,
      fn: () => fn(overwrite),
    });
  } catch (e) {
    if (e instanceof FileExistsError) {
      const indentation = logger.indentation;
      logger.indent(indentation + 2);
      logger.dimmed_error(e instanceof Error ? e.message : e);
      logger.indent(indentation);

      if (e instanceof Error) {
        const overwrite = await confirm_overwrite_prompt();
        if (overwrite) {
          await config_spinner({
            name,
            fn: () => fn(true),
          });
        }
      }
    } else {
      throw e;
    }
  }
};
