# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.2.0](https://github.com/digidem/mapeo-default-config/compare/v3.1.0...v3.2.0) (2020-10-20)


### Features

* Add German translation & remove untranslated strings ([#6](https://github.com/digidem/mapeo-default-config/issues/6)) ([31aa9b9](https://github.com/digidem/mapeo-default-config/commit/31aa9b9d0d3692a9ca362b464cf0a42768ed7e6a)), closes [#7](https://github.com/digidem/mapeo-default-config/issues/7)
* German, Thai & Khmer translations ([#8](https://github.com/digidem/mapeo-default-config/issues/8)) ([b7a6ea2](https://github.com/digidem/mapeo-default-config/commit/b7a6ea2d71051e60c89c52813236190fec980c8d))


### Bug Fixes

* extract select options for transltion ([3ef4c82](https://github.com/digidem/mapeo-default-config/commit/3ef4c827043c06768cfc4a9887994582681908a5))
* fix crowdin integration ([9ce43ab](https://github.com/digidem/mapeo-default-config/commit/9ce43ab6ff21f150aca3010d5ed07707d4e2be45))
* fix missing apostrophe in descriptions for message transltion ([c9fbd28](https://github.com/digidem/mapeo-default-config/commit/c9fbd280463be5b663c72a4702f3af85ecb392b3))

## [3.1.0](https://github.com/digidem/mapeo-default-config/compare/v3.0.0...v3.1.0) (2020-09-08)


### Features

* Add creative commons license ([c80585f](https://github.com/digidem/mapeo-default-config/commit/c80585f352133e05aabb1485280ce4aabf78c74a))
* Add translations ([911fadc](https://github.com/digidem/mapeo-default-config/commit/911fadcd12208ab47eea65794628789ceea2c3ec))

## [3.0.0](https://github.com/digidem/mapeo-default-config/compare/v2.1.0...v3.0.0) (2020-07-09)


### ⚠ BREAKING CHANGES

* Publish the built settings under the `dist` folder, to
avoid confusion with the `build` folder which will have different files
in it if build is done locally. Do not publish source files, to save
disk space in Mobile and Desktop builds.

### Features

* Publish built settings under `dist` folder on npm ([544eeb6](https://github.com/digidem/mapeo-default-config/commit/544eeb63be2e771846f7ce25b83f27fa66488019))
