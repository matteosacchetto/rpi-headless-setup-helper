# Changelog

## [0.6.0](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.5.2...v0.6.0) (2025-04-29)


### ⚠ BREAKING CHANGES

* bump node to 20

### Bug Fixes

* bump node to 20 ([95de99f](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/95de99ff9f4156d6fb59b84b14967a6dd74a769e))
* revert to log-symbols 6.0.0 ([99926d2](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/99926d26f6fb6661cab906a08ed5ad00f5f7b560))


### Miscellaneous Chores

* update version in README ([911a54d](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/911a54d84bf0166ac2353780abbd071b1f9f1f78))

## [0.5.2](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.5.1...v0.5.2) (2024-10-21)


### Bug Fixes

* test runner now exits with exit code 1 if a test fails ([d3fe615](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/d3fe61505df9ed812e5229f5020d9b8fc05e90fa))
* use helpCommand instead of addHelpCommand since deprecated ([de4f3c2](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/de4f3c20a11644a0f0ef7b391a663e2f1eaf9dca))

## [0.5.1](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.5.0...v0.5.1) (2024-06-21)


### Bug Fixes

* refactor and update dependencies ([#128](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/128)) ([0738d6a](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/0738d6a6b71bdc8d854f1ecce8b3dcf052ce459a))

## [0.5.0](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.4.2...v0.5.0) (2024-01-09)


### ⚠ BREAKING CHANGES

* **node:** bump node to 18.19.0 ([#103](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/103))

### Bug Fixes

* **node:** bump node to 18.19.0 ([#103](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/103)) ([7efc832](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/7efc832ee57b63d27cd871589e3feac774b85a5d))

## [0.4.2](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.4.1...v0.4.2) (2023-12-19)


### Features

* **advanced:** add support for tilde expansion ([#96](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/96)) ([e8f8b9c](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/e8f8b9cb4efbfd185e193bb816d6309d184c7ab8))

## [0.4.1](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.4.0...v0.4.1) (2023-11-14)


### Bug Fixes

* release constraint on npm version ([0ee5f6b](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/0ee5f6bb230a3398786026b8dabd53fa17eab866))

## [0.4.0](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.3.4...v0.4.0) (2023-11-09)


### ⚠ BREAKING CHANGES

* bump dependencies ([#83](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/83))
* bump min node version to v18.18.0 ([#83](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/83))

### Bug Fixes

* bump dependencies ([#83](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/83)) ([db7105a](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/db7105ae38af070631b7e59d1daad97041241f71))

## [0.3.4](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.3.3...v0.3.4) (2023-09-11)


### Bug Fixes

* gracefully handle CTRL-C in prompts ([#50](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/50)) ([781fbd5](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/781fbd5fa6ad35b0742776f8ff1b22c370939880))

## [0.3.3](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.3.2...v0.3.3) (2023-08-14)


### Bug Fixes

* update dependencies ([f3aa129](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/f3aa12985a963a1f89c2142c3a1ef4157aeb2850))

## [0.3.2](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.3.1...v0.3.2) (2023-07-29)


### Bug Fixes

* cursor not showing properly its updated position ([#25](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/25)) ([11978cf](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/11978cf9c8c6fc41f3c440daaef77123b4232776))

## [0.3.1](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.3.0...v0.3.1) (2023-07-27)


### Bug Fixes

* **interactive prompt:** skip advanced options when enable is false ([#23](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/23)) ([75f089b](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/75f089ba2e8ce1fb3ec821cc58179d096cce1359))

## [0.3.0](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.2.2...v0.3.0) (2023-07-19)


### ⚠ BREAKING CHANGES

* add advanced configuration to run on first boot ([#10](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/10))

### Features

* add advanced configuration to run on first boot ([#10](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/10)) ([ea7d4e8](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/ea7d4e8ca179a552bb8ec93ff186643a84aff539))

## [0.2.2](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.2.1...v0.2.2) (2023-05-25)


### Bug Fixes

* echo does not handle properly options in bash-completion ([#8](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/8)) ([f163cf3](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/f163cf3077e63a2b7958858ad929910cf70bf9d7))

## [0.2.1](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.2.0...v0.2.1) (2023-05-24)


### Bug Fixes

* bash-completion now also completes the `help` command ([#6](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/6)) ([3707b76](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/3707b7637202a92ae30d4c0b5839d7cdaf026140))

## [0.2.0](https://github.com/matteosacchetto/rpi-headless-setup-helper/compare/v0.1.0...v0.2.0) (2023-05-24)


### ⚠ BREAKING CHANGES

* non-interactive CLI ([#4](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/4))

### Features

* non-interactive CLI ([#4](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/4)) ([7abe282](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/7abe282277bf8254c87896300afbc892d1c82801))

## 0.1.0 (2023-05-12)


### Features

* 0.0.0-dev ([#1](https://github.com/matteosacchetto/rpi-headless-setup-helper/issues/1)) ([5a8757b](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/5a8757bdaa5e08d567efaaf34bbdfaf277a8d728))


### Reverts

* "ci: attempt to fix permissions on release-please" ([c90139c](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/c90139c7fdcb529031ca14e142037b01da8304e9))


### Miscellaneous Chores

* update description ([a76539b](https://github.com/matteosacchetto/rpi-headless-setup-helper/commit/a76539b604daecc835f5b8a4d590b61a6e3a2cc5))
