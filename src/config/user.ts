import { writeFile } from 'node:fs/promises';
import { throw_if_file_exists } from '@/utils/fs';
import { exec } from '@/utils/program';

/**
 * To create a user add a `userconf.txt` file in the boot partition of the SD card.
 * This file should contain a single line of text, consisting of `username:password`
 *
 * @link https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-a-user
 */
export const user_config = async ({
  username,
  password,
  overwrite = false,
}: {
  username: string;
  password: string;
  overwrite?: boolean;
}) => {
  const file = 'userconf.txt';
  if (!overwrite) {
    await throw_if_file_exists(file);
  }

  let hashed_pwd = '';
  if (password !== '') {
    const { stdout } = await exec(`openssl passwd -6 ${password}`);
    hashed_pwd = stdout.trimEnd();
  }

  await writeFile(file, `${username}:${hashed_pwd}`);
};
