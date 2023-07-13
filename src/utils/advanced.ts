/**
 * The parts of the script used here are based on the following resource
 * 
 * @link https://github.com/raspberrypi/rpi-imager/blob/5fa3fbe8dcef4ab01c0a2fed5638759265c3f7f6/src/OptionsPopup.qml#L783
 *
 * This customization is based on what the raspberry pi imager does
 */

export const start = () => {
  return `#!/bin/bash

set +e
`;
};

export const set_ssh_key = (key: string) => {
  return `# Set SSH key
FIRSTUSER=\`getent passwd 1000 | cut -d: -f1\`
FIRSTUSERHOME=\`getent passwd 1000 | cut -d: -f6\`
install -o "$FIRSTUSER" -m 700 -d "$FIRSTUSERHOME/.ssh"
install -o "$FIRSTUSER" -m 600 <(printf "${key}") "$FIRSTUSERHOME/.ssh/authorized_keys"
`;
};

export const set_ssh_disable_password_login = () => {
  return `# Disable SSH password login
echo 'PasswordAuthentication no' >> /etc/ssh/sshd_config
`;
};

export const set_kdb_layout = (kbd_layout: string) => {
  return `# Set keyboard layout
cat >/etc/default/keyboard <<'KBEOF'
XKBMODEL="pc105"
XKBLAYOUT="${kbd_layout}"
XKBVARIANT=""
XKBOPTIONS=""

KBEOF
dpkg-reconfigure -f noninteractive keyboard-configuration
`;
};

export const set_timezone = (timezone: string) => {
  return `# Set timezone
rm -f /etc/localtime
echo "${timezone}" >/etc/timezone
dpkg-reconfigure -f noninteractive tzdata
`;
};

export const set_hostname = (hostname: string) => {
  return `# Set hostname
CURRENT_HOSTNAME=\`cat /etc/hostname | tr -d " \\t\\n\\r"\`
echo ${hostname} >/etc/hostname
sed -i "s/127.0.1.1.*$CURRENT_HOSTNAME/127.0.1.1\\t${hostname}/g" /etc/hosts
`;
};

export const end = () => {
  return `# Remove this script
rm -f /boot/firstrun.sh
sed -i 's| systemd.run.*||g' /boot/cmdline.txt
exit 0
`;
};
