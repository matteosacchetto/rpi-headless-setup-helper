export const start = () => {
  return `#!/bin/bash

set +e
`;
};

export const set_user = (username: string, password: string) => {
  return `# Set first user
FIRSTUSER=\`getent passwd 1000 | cut -d: -f1\`
FIRSTUSERHOME=\`getent passwd 1000 | cut -d: -f6\`
if [ -f /usr/lib/userconf-pi/userconf ]; then
   /usr/lib/userconf-pi/userconf '${username}' '${password}'
else
   echo "$FIRSTUSER:"'${password}' | chpasswd -e
   if [ "$FIRSTUSER" != "${username}" ]; then
      usermod -l "${username}" "$FIRSTUSER"
      usermod -m -d "/home/${username}" "${username}"
      groupmod -n "${username}" "$FIRSTUSER"
      if grep -q "^autologin-user=" /etc/lightdm/lightdm.conf ; then
         sed /etc/lightdm/lightdm.conf -i -e "s/^autologin-user=.*/autologin-user=${username}/"
      fi
      if [ -f /etc/systemd/system/getty@tty1.service.d/autologin.conf ]; then
         sed /etc/systemd/system/getty@tty1.service.d/autologin.conf -i -e "s/$FIRSTUSER/${username}/"
      fi
      if [ -f /etc/sudoers.d/010_pi-nopasswd ]; then
         sed -i "s/^$FIRSTUSER /${username} /" /etc/sudoers.d/010_pi-nopasswd
      fi
   fi
fi`;
};

export const set_ssh_enable = () => {
  return `# Enable SSH
systemctl enable ssh
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

export const set_wifi_config = (wifi_config: string) => {
  return `# Set wifi config
printf "${wifi_config}" > /etc/wpa_supplicant/wpa_supplicant.conf
chmod 600 /etc/wpa_supplicant/wpa_supplicant.conf
rfkill unblock wifi
for filename in /var/lib/systemd/rfkill/*:wlan ; do
  echo 0 > $filename
done
`;
};

export const end = () => {
  return `# Remove this script
rm -f /boot/firstrun.sh
sed -i 's| systemd.run.*||g' /boot/cmdline.txt
exit 0
`;
};
