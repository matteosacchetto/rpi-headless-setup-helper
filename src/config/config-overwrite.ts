import { FileExistsError } from '@/errors/file-exists-error';
import { logger } from '@/logger';
import { confirm_overwrite_prompt } from '@/prompts/confirm-overwrite';
import { log_indent } from '@/utils/log';
import { config_spinner } from './config-spinner';

export const config_overwrite = async ({
  name,
  fn,
  overwrite,
  retry = true,
}: {
  name: string;
  fn: (overwrite: boolean) => Promise<unknown>;
  overwrite: boolean;
  retry: boolean;
}) => {
  try {
    await config_spinner({
      name,
      fn: () => fn(overwrite),
    });
  } catch (e) {
    if (e instanceof FileExistsError) {
      if (retry) {
        log_indent({
          fn: () => {
            logger.dimmed_error((e as FileExistsError).message);
          },
        });

        const overwrite = await confirm_overwrite_prompt();
        if (overwrite) {
          await config_spinner({
            name,
            fn: () => fn(true),
          });
        }
      } else {
        throw e;
      }
    } else {
      throw e;
    }
  }
};
