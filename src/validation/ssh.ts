import { readFile } from 'node:fs/promises';
import { ValidationError } from '@/errors/validation-error';
import { exists } from '@/utils/fs';

const ssh_dss = /^ssh-dss AAAAB3NzaC1kc3[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;
const ecdsa_sha2_nistp256 =
  /^ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;
const sk_ecdsa_sha2_nistp256 =
  /^sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNhLXNoYTItbmlzdHAyNTZAb3BlbnNzaC5jb2[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;
const ssh_ed25519 =
  /^ssh-ed25519 AAAAC3NzaC1lZDI1NTE5[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;
const sk_ssh_ed25519 =
  /^sk-ssh-ed25519@openssh.com AAAAGnNrLXNzaC1lZDI1NTE5QG9wZW5zc2guY29t[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;
const ssh_rsa = /^ssh-rsa AAAAB3NzaC1yc2[0-9A-Za-z+/]+[=]{0,3}(\s.*)?$/;

const regexes = [
  ssh_rsa,
  ssh_ed25519,
  ecdsa_sha2_nistp256,
  ssh_dss,
  sk_ecdsa_sha2_nistp256,
  sk_ssh_ed25519,
];

export const validate_key_path = async (key_path: string) => {
  if (!(await exists(key_path))) {
    throw new ValidationError(`The file ${key_path} does not exist`);
  }

  const file_content = (await readFile(key_path, { encoding: 'utf-8' })).trim();

  if (regexes.some((el) => el.test(file_content))) {
    return true;
  }

  throw new ValidationError(
    `The file ${key_path} does not contain a public SSH key`
  );
};
