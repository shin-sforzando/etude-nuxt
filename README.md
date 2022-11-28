# etude-nuxt

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/etude-nuxt)](https://github.com/shin-sforzando/etude-nuxt/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/etude-nuxt/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/etude-nuxt/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
|:--------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

Etude for Nuxt.js.

----

<!-- TOC -->

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Develop](#develop)
  - [Test](#test)
  - [Storybook](#storybook)
  - [Document](#document)
    - [CHANGELOG.md](#changelogmd)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js
  - [Nuxt.js](https://nuxt.com/v3) (v3 or higher)
- [git-secret](https://git-secret.io)

## How to

```shell
$ yarn run
<snip>
   - build
      nuxt build
   - dev
      nuxt dev
   - generate
      nuxt generate
   - hide
      git secret hide -mv
   - postinstall
      nuxt prepare
   - preview
      nuxt preview
   - reveal
      git secret reveal
```

### Develop

`yarn dev` to start development server.

### Test

(T. B. D.)

### Storybook

(T. B. D.)

### Document

#### CHANGELOG.md

To update CHANGELOG.md, `git cliff --unreleased --output CHANGELOG.md`.

### Deploy

(T. B. D.)

## Misc

### Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
