# rpi-headless-setup-helper

NodeJS CLI which simplifies the headless setup of a Raspberry Pi

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/matteosacchetto/rpi-headless-setup-helper?label=latest%20release&style=for-the-badge)

## Table of contents

* [Install](#install)
  + [Latest version](#latest-version)
  + [Other version](#other-version)
  + [Bash completion](#bash-completion)
* [Dependencies](#dependencies)
* [Run](#run)
* [CLI interface](#cli-interface)
  + [Commands](#commands)
    - [ssh](#ssh)
      * [Options](#options)
        + [-y, --yes](#-y---yes)
        + [-s, --script](#-s---script)
    - [user](#user)
      * [Options](#options-1)
        + [-u, --username <username>](#-u---username-username)
        + [-p, --password <password>](#-p---password-password)
        + [-y, --yes](#-y---yes-1)
        + [-s, --script](#-s---script-1)
    - [wifi](#wifi)
      * [Options](#options-2)
        + [-c, --country <country_code>](#-c---country-country_code)
        + [-i, --id <ssid>](#-i---id-ssid)
        + [-p, --psk <psk>](#-p---psk-psk)
        + [-y, --yes](#-y---yes-2)
        + [-s, --script](#-s---script-2)
    - [advanced](#advanced)
      * [Options](#options-3)
        + [-t, --timezone <timezone>](#-t---timezone-timezone)
        + [-l, --kbd-layout <kbd_layout>](#-l---kbd-layout-kbd_layout)
        + [-k, --ssh-key <path_to_key>](#-k---ssh-key-path_to_key)
        + [-d, --ssh-password-disable](#-d---ssh-password-disable)
        + [-h, --hostname <hostname>](#-h---hostname-hostname)
        + [-y, --yes](#-y---yes-3)
        + [-s, --script](#-s---script-3)
  + [Usage](#usage)


## Install

### Latest version

Install it locally with

```bash
npm i https://github.com/matteosacchetto/rpi-headless-setup-helper/releases/download/v0.4.1/matteosacchetto-rpi-headless-setup-helper-0.4.1.tgz
```

Or install it globally with

```bash
npm i --location=global https://github.com/matteosacchetto/rpi-headless-setup-helper/releases/download/v0.4.1/matteosacchetto-rpi-headless-setup-helper-0.4.1.tgz
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

where you have to replace `{version}` with the version number you downloaded (ex: 0.4.1)

### Bash completion

Since version 0.2.0, the package also includes a bash completion script. If you install the package globally, you are on Linux and you use bash as your main shell, I highly suggest installing bash completion, as it improves the UX of this module.

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
  advanced [options]  create advanced headless setup file
  help [command]  display help for command
```

When running the command without any subcommand or option it will run an interactive CLI which guides you through the headless configuration

If you instead want to use it in a non interactive way, or you plan to use it in scripts, please refer to the individual subcommands explained in the section below.

### Commands

#### `ssh`

since: `v0.2.0`

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

since: `v0.2.0`

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

since: `v0.2.0`

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

#### `advanced`

since: `v0.3.0`

Allows you to configure additional settings, like SSH keys, disabling password authentication and so on. The way to configure these additional settings is based on the way the [rpi-imager]() tool does it, with some differences related to the configuration of SSH, user and WiFi. If you are interested in knowing more, please refer to [this discussion on how to run a script on first boot](https://github.com/RPi-Distro/raspberrypi-sys-mods/pull/40#issuecomment-849552711) and to [this file of the rpi-imager repo containing the details on how the configure those settings](https://github.com/raspberrypi/rpi-imager/blob/5fa3fbe8dcef4ab01c0a2fed5638759265c3f7f6/src/OptionsPopup.qml)

```
Usage: rpi-headless-setup-helper advanced [options]

create advanced headless setup file

Options:
  -v, --version                  output the version number
  -t, --timezone <timezone>      set the timezone
  -l, --kbd-layout <kbd_layout>  set the keyboard layout
  -k, --ssh-key <path_to_key>    specify the path to the public SSH key
  -d, --ssh-password-disable     disable password authentication for SSH (default: false)
  -h, --hostname <hostname>      set the hostname (default: "raspberrypi")
  -y, --yes                      overwrite file if exists (default: false)
  -s, --script                   it will run it as a script and will disable every interactive prompt (default: false)
  --help                         display help for command
```

##### Options

###### `-t, --timezone <timezone>`

Set the timezone by specifying the IANA timezone identifier (ex. `America/New_York`).

This options is `required`

###### `-l, --kbd-layout <kbd_layout>`

Set the specific keyboard layout based on the x11 list (on a Linux machine you can run `localectl list-x11-keymap-layouts` to see the whole list, or refer to [src/utils/keyboard-layouts.ts](src/utils/keyboard-layouts.ts)).

This options is `required`

###### `-k, --ssh-key <path_to_key>`

Specify the path to the public key to copy to the raspberry pi first user.

###### `-d, --ssh-password-disable`

Disable SSH password authentication. This can be done ONLY if you provide a public key with the `-k` option (default: `false`)


###### `-h, --hostname <hostname>`

Set a custom hostname (default: `raspberrypi`)

###### `-y, --yes`

In case the WiFi specific files for the headless setup already exist, overwrite them (default: `false`).

###### `-s, --script`

This CLI is being used in a script, so disable all interactive prompts. In case the WiFi specific files already exist and the `-y, --yes` option was not used, it will not ask if you want to overwrite the files and simply fail (default: `false`).

### Usage

Simply run this CLI without any parameter for the interactive CLI or run it providing the subcommand and all the necessary options.