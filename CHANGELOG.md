# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/digidem/mapeo-default-config/compare/v2.1.0...v3.0.0) (2020-07-09)


### ⚠ BREAKING CHANGES

* Publish the built settings under the `dist` folder, to
avoid confusion with the `build` folder which will have different files
in it if build is done locally. Do not publish source files, to save
disk space in Mobile and Desktop builds.

### Features

* Publish built settings under `dist` folder on npm ([544eeb6](https://github.com/digidem/mapeo-default-config/commit/544eeb63be2e771846f7ce25b83f27fa66488019))
