import { throw_if_file_exists, throw_if_file_not_exists } from '@/utils/fs';
import { readFile, writeFile } from 'node:fs/promises';
import * as a from '@/utils/advanced';

/**
 * For headless setup, SSH can be enabled by placing a file named ssh, without any extension, onto the boot partition of the SD Card.
 *
 * @link https://www.raspberrypi.com/documentation/computers/configuration.html#setting-up-a-headless-raspberry-pi
 */
export const advanced_config = async ({
  overwrite = false,
  hostname,
  ssh,
  timezone,
  kbd_layout,
}: {
  overwrite?: boolean;
  hostname: string;
  ssh: { key_path?: string; disable_password_login?: boolean };
  timezone: string;
  kbd_layout: string;
}) => {
  const firstrun = 'firstrun.sh';
  if (!overwrite) {
    await throw_if_file_exists(firstrun);
  }

  const firstrun_content = [
    a.start(),
    a.set_hostname(hostname),
    ssh.key_path !== undefined
      ? a.set_ssh_key(await readFile(ssh.key_path, { encoding: 'utf-8' }))
      : undefined,
    ssh.disable_password_login ? a.set_ssh_disable_password_login() : undefined,
    a.set_timezone(timezone),
    a.set_kdb_layout(kbd_layout),
    a.end(),
  ]
    .filter((el) => el !== undefined)
    .join('\n');

  await writeFile(firstrun, firstrun_content);

  // Update cmdline
  const cmdline = 'cmdline.txt';
  await throw_if_file_not_exists(cmdline);
  const cmdline_content = await readFile(cmdline, { encoding: 'utf-8' });
  const cmdline_updated_content = cmdline_content.replace(
    /init=.*/,
    'init=/usr/lib/raspberrypi-sys-mods/firstboot systemd.run=/boot/firstrun.sh systemd.run_success_action=reboot systemd.unit=kernel-command-line.target'
  );
  await writeFile(cmdline, cmdline_updated_content, {
    mode: 0o755,
  });
};
