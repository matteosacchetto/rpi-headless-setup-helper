import { throw_if_file_exists, throw_if_file_not_exists } from '@/utils/fs';
import { readFile, writeFile } from 'node:fs/promises';
import * as a from '@/utils/advanced';

/**
 * For headless setup of advanced configuration refer to the following discussion and resource
 *
 * @link https://github.com/RPi-Distro/raspberrypi-sys-mods/pull/40
 * @link https://github.com/raspberrypi/rpi-imager/blob/5fa3fbe8dcef4ab01c0a2fed5638759265c3f7f6/src/OptionsPopup.qml#L783
 *
 * The customization used here is based on what the raspberry pi imager does
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
  const cmdline = 'cmdline.txt';
  await throw_if_file_not_exists(cmdline);

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
  const cmdline_content = await readFile(cmdline, { encoding: 'utf-8' });
  const cmdline_updated_content = cmdline_content
    .replaceAll(/systemd\.[^ ]+/g, '') // Remove previous systemd.* statements
    .replace(
      /init=[^ ]+/,
      `init=/usr/lib/raspberrypi-sys-mods/firstboot systemd.run=/boot/${firstrun} systemd.run_success_action=reboot systemd.unit=kernel-command-line.target`
    ); // Remove previous init=* statement

  await writeFile(cmdline, cmdline_updated_content, {
    mode: 0o755,
  });
};
