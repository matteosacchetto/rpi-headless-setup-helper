import { FileExistsError } from '@/errors/file-exists-error';
import { FileNotExistsError } from '@/errors/file-not-exists-error';
import { access, constants } from 'fs/promises';
import { homedir } from 'os';

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

export const throw_if_file_not_exists = async (path: string) => {
  if (!(await exists(path))) {
    throw new FileNotExistsError(`File '${path}' does not exist`);
  }
};

export const untildify = (path: string) => {
  if (path.startsWith('~/')) {
    return path.replace('~/', `${homedir()}/`);
  }

  return path;
};
