# rpi-headless-setup-helper

NodeJS CLI which simplifies the headless setup of a Raspberry Pi

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/matteosacchetto/rpi-headless-setup-helper?label=latest%20release&style=for-the-badge)

## Install

### Latest version

Install it locally with

```bash
npm i https://github.com/matteosacchetto/rpi-headless-setup-helper/releases/download/v0.1.1/matteosacchetto-rpi-headless-setup-helper-0.1.1.tgz
```

Or install it globally with

```bash
npm i --location=global https://github.com/matteosacchetto/rpi-headless-setup-helper/releases/download/v0.1.1/matteosacchetto-rpi-headless-setup-helper-0.1.1.tgz
```

### Other version

Go to the [release](https://github.com/matteosacchetto/rpi-headless-setup-helper/releases) section of the GitHub repository

Copy the link the rpi-headless-setup-helper-{version}.tgz

Install it locally with

```bash
npm i <link-to-rpi-headless-setup-helper-{version}.tgz>
```

Or install it globally with

```bash
npm i --location=global <link-to-rpi-headless-setup-helper-{version}.tgz>
```

where you have to replace `{version}` with the version number you downloaded (ex: 0.1.1) 

### Bash completion

Since version 0.1.1, the package also includes a bash completion script. If you install the package globally, you are on Linux and you use bash as your main shell, I highly suggest installing bash completion, as it improves the UX of this module.

To install it, I recommend to perform the following steps.

Find where did npm isntall this package. To do so you can run the following command

```bash
npm list -g -p | grep -m 1 @matteosacchetto/rpi-headless-setup-helper
```

Then we can link `bash-completion.sh` script contained within the folder shown by the previous command to /usr/share/bash-completion/completions/rpi-headless-setup-helper

```bash
ln -s <path-found-previously>/bash-completion.sh /usr/share/bash-completion/completions/rpi-headless-setup-helper
```

One-liner to do so

```bash
sudo ln -s `npm list -g -p | grep -m 1 @matteosacchetto/rpi-headless-setup-helper`/bash-completion.sh /usr/share/bash-completion/completions/rpi-headless-setup-helper
```

To remove the completion file

```bash
sudo rm /usr/share/bash-completion/completions/rpi-headless-setup-helper
```

You can alternatively install bash completion locally with the following commands

```bash
mkdir -p ~/.local/share/bash-completion/completions
ln -s `npm list -g -p | grep -m 1 @matteosacchetto/rpi-headless-setup-helper`/bash-completion.sh ~/.local/share/bash-completion/completions/rpi-headless-setup-helper
```

To remove it 

```bash
rm ~/.local/share/bash-completion/completions/rpi-headless-setup-helper
```

## Dependencies

The current version of the CLI depends on the availability of the following dependencies

- `openssl`

These dependencies will be called by the CLI in order to perform some of the steps.

Please refer to the dependencies specific guides to know how to install them on your specific OS.

## Run

If you installed it locally you can run it with

```bash
npx @matteosacchetto/rpi-headless-setup-helper
```

If instead you installed it globally you can run it with
```bash
rpi-headless-setup-helper
```

## CLI interface

```
Usage: rpi-headless-setup-helper [options] [command]

Raspberry Pi headless setup helper CLI

Options:
  -v, --version   output the version number
  -h, --help      display help for command

Commands:
  ssh [options]   create SSH headless setup file
  user [options]  create user headless setup file
  wifi [options]  create WiFi headless setup file
  help [command]  display help for command
```

When running the command without any subcommand or option it will run an interactive CLI which guides you through the headless configuration

If you instead want to use it in a non interactive way, or you plan to use it in scripts, please refer to the individual subcommands explained in the section below.

### Commands

#### `ssh`

Allows you to create the files necessary for the [headless configuration of SSH on a Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#setting-up-a-headless-raspberry-pi).

```
Usage: rpi-headless-setup-helper ssh [options]

create SSH headless setup file

Options:
  -v, --version  output the version number
  -y, --yes      overwrite file if exists (default: false)
  -s, --script   it will run it as a script and will disable every interactive prompt (default: false)
  -h, --help     display help for command
```

##### Options

###### `-y, --yes`

In case the SSH specific files for the headless setup already exist, overwrite them (default: `false`).

###### `-s, --script`

This CLI is being used in a script, so disable all interactive prompts. In case the SSH specific files already exist and the `-y, --yes` option was not used, it will not ask if you want to overwrite the files and simply fail (default: `false`).

#### `user`

Allows you to create the files necessary for the [headless configuration of the first user of the Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-a-user).

```
Usage: rpi-headless-setup-helper user [options]

create user headless setup file

Options:
  -v, --version              output the version number
  -u, --username <username>  specify the username
  -p, --password <password>  specify the password
  -y, --yes                  overwrite file if exists (default: false)
  -s, --script               it will run it as a script and will disable every interactive prompt (default: false)
  -h, --help                 display help for command
```

##### Options

###### `-u, --username <username>`

The Linux user you want to create as the first user of the Raspberry Pi. As far as the format of the username, it will need to follow the Linux rules.

This option is `required`.

###### `-p, --password <password>`

The password of the Linux user set with the previous option. 

This option is `required`.

###### `-y, --yes`

In case the user specific files for the headless setup already exist, overwrite them (default: `false`).

###### `-s, --script`

This CLI is being used in a script, so disable all interactive prompts. In case the user specific files already exist and the `-y, --yes` option was not used, it will not ask if you want to overwrite the files and simply fail (default: `false`).

#### `wifi`

Allows you to create the files necessary for the [headless configuration of the WiFi on the Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-networking-2).

```
Usage: rpi-headless-setup-helper wifi [options]

create WiFi headless setup file

Options:
  -v, --version                 output the version number
  -c, --country <country_code>  specify the 2 digit ISO-3166 country code
  -i, --id <ssid>               speficy the SSID
  -p, --psk <psk>               specify the psk
  -y, --yes                     overwrite file if exists (default: false)
  -s, --script                  it will run it as a script and will disable every interactive prompt (default: false)
  -h, --help                    display help for command
```

##### Options

###### `-c, --country <country_code>`

Specify the [2 digit ISO-3166 country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).

This option is `required`.

###### `-i, --id <ssid>`

Specify the SSID.

This option is `required`.

###### `-p, --psk <psk>`

Specify the passkey. It MUST be between 8 and 63 characters long.

This option is `required`.

###### `-y, --yes`

In case the WiFi specific files for the headless setup already exist, overwrite them (default: `false`).

###### `-s, --script`

This CLI is being used in a script, so disable all interactive prompts. In case the WiFi specific files already exist and the `-y, --yes` option was not used, it will not ask if you want to overwrite the files and simply fail (default: `false`).

### Usage

Simply run this CLI without any parameter for the interactive CLI or run it providing the subcommand and all the necessary options.