import { FileExistsError } from '@/errors/file-exists-error';
import { access, constants } from 'fs/promises';

export const exists = async (path: string) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

export const throw_if_file_exists = async (path: string) => {
  if (await exists(path)) {
    throw new FileExistsError(`File '${path}' already exists`);
  }
};
