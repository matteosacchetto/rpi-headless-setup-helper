import { config_overwrite } from './config/config-overwrite';
import { ssh_config } from './config/ssh';
import { user_config } from './config/user';
import { wifi_config } from './config/wifi';
import { advanced_config } from './config/advanced';
import { check_dependency_spinner } from './dependencies/check-dependency-spinner';
import { openssl } from './dependencies/openssl';
import { logger } from './logger';
import { confirm_creation_prompt } from './prompts/confirm-creation';
import { ssh_prompt } from './prompts/ssh';
import { user_prompt } from './prompts/user';
import { wifi_prompt } from './prompts/wifi';
import { advanced_prompt } from './prompts/advanced';
import { exit_fail_on_error, exit_success } from './utils/process';
import { deep_redact } from './utils/redact';

import { createCommand } from './utils/commands';
import { name, description } from './config';

import ssh_command from './commands/ssh';
import user_command from './commands/user';
import wifi_command from './commands/wifi';
import advanced_command from './commands/advanced';

const program = createCommand(name, description);

program.addCommand(ssh_command);
program.addCommand(user_command);
program.addCommand(wifi_command);
program.addCommand(advanced_command);
program.addHelpCommand();

program.action(async () => {
  await exit_fail_on_error(async () => {
    await check_dependency_spinner(openssl);
  });

  // Interactive prompts
  const ssh = await ssh_prompt();
  const user = await user_prompt('*');
  const wifi = await wifi_prompt('*');
  const advanced = await advanced_prompt({
    ssh_enabled: ssh.enable,
  });

  if (!ssh.enable && !user.enable && !wifi.enable && !advanced.enable) {
    await exit_success(() => {
      logger.empty();
      logger.info('No configuration file created');
    });
  }

  // Redacted configuration
  const redacted_configuration = {
    ssh,
    user: deep_redact(user, ['password']),
    wifi: deep_redact(wifi, ['psk']),
    advanced,
  };

  // Ask for confirmation
  const confirm_creation = await confirm_creation_prompt(
    redacted_configuration
  );

  // Add newline
  logger.empty();

  if (!confirm_creation) {
    await exit_success(() => {
      logger.info('No configuration file created');
    });
  }

  // Create configuration files
  if (ssh.enable) {
    await exit_fail_on_error(async () => {
      await config_overwrite({
        name: `SSH`,
        fn: async (overwrite: boolean) => await ssh_config({ overwrite }),
        overwrite: false,
        retry: true,
      });
    });
  }

  if (user.enable) {
    await exit_fail_on_error(async () => {
      await config_overwrite({
        name: `user`,
        fn: async (overwrite: boolean) =>
          await user_config({
            username: user.username,
            password: user.password,
            overwrite,
          }),
        overwrite: false,
        retry: true,
      });
    });
  }

  if (wifi.enable) {
    await exit_fail_on_error(async () => {
      await config_overwrite({
        name: `WiFi`,
        fn: async (overwrite: boolean) =>
          await wifi_config({
            country_code: wifi.country_code,
            ssid: wifi.ssid,
            psk: wifi.psk,
            overwrite,
          }),
        overwrite: false,
        retry: true,
      });
    });
  }

  if (advanced.enable) {
    await exit_fail_on_error(async () => {
      await config_overwrite({
        name: `Advanced`,
        fn: async (overwrite: boolean) =>
          await advanced_config({
            overwrite,
            hostname: advanced.hostname,
            timezone: advanced.timezone,
            kbd_layout: advanced.kbd_layout,
            ssh: advanced.ssh,
          }),
        overwrite: false,
        retry: true,
      });
    });
  }
});

program.parse(process.argv);
