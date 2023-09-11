import { kbd_layout_by_locale } from '@/utils/keyboard-layouts';
import { get_country_from_locale, get_locale_country } from '@/utils/locale';
import { get_timezone } from '@/utils/timezone';
import { async_error_to_msg, error_to_msg } from '@/utils/validation';
import { validate_kbd_layout } from '@/validation/kbd_layout';
import { validate_timezone } from '@/validation/timezone';
import confirm from '@inquirer/confirm';
import input from '@inquirer/input';
import chalk from 'chalk';
import { Advanced } from './types';
import { validate_key_path } from '@/validation/ssh';
import { validate_hostname } from '@/validation/hostname';
import { exit_success_on_error_ignore } from '@/utils/process';

// Prop
export const advanced_prompt = async ({
  ssh_enabled,
}: {
  ssh_enabled: boolean;
}) => {
  const enable = await exit_success_on_error_ignore(
    async () =>
      await confirm({
        message: 'Set advanced settings',
        default: false,
      })
  );

  if (!enable) {
    return { enable };
  }

  const hostname = await exit_success_on_error_ignore(
    async () =>
      await input({
        message: 'Set hostname',
        default: 'raspberrypi',
        validate: (proposed_hostname) =>
          error_to_msg(() => validate_hostname(proposed_hostname)),
      })
  );

  const ssh: {
    key_path?: string;
    disable_password_login?: boolean;
  } = {};

  if (ssh_enabled) {
    const enable_pub_key = await exit_success_on_error_ignore(
      async () =>
        await confirm({
          message: 'Add public key',
          default: true,
        })
    );

    if (enable_pub_key) {
      ssh.key_path = await exit_success_on_error_ignore(
        async () =>
          await input({
            message: `Public key path ${chalk.reset.dim(
              `(cwd: ${process.cwd()})`
            )}`,
            validate: async (proposed_key_path) =>
              await async_error_to_msg(
                async () => await validate_key_path(proposed_key_path)
              ),
          })
      );

      ssh.disable_password_login = await exit_success_on_error_ignore(
        async () =>
          await confirm({
            message: 'Disable password login',
            default: false,
          })
      );
    }
  }

  const timezone = await exit_success_on_error_ignore(
    async () =>
      await input({
        message: 'Set timezone',
        default: get_timezone(),
        validate: (proposed_timezone) =>
          error_to_msg(() => validate_timezone(proposed_timezone)),
      })
  );

  const kbd_layout = await exit_success_on_error_ignore(
    async () =>
      await input({
        message: 'Keyboard layout',
        default:
          kbd_layout_by_locale.get(
            get_country_from_locale(get_locale_country()) as any
          ) ?? '',
        validate: (proposed_kbd_layout) =>
          error_to_msg(() => validate_kbd_layout(proposed_kbd_layout)),
      })
  );

  return <Advanced>{
    enable,
    hostname,
    ssh,
    timezone,
    kbd_layout,
  };
};
