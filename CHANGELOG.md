# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## v11.0.0 - 2020-04-10

### Changed

- This Repo now only includes most of the error rules from ESLint.

### Removed

- Almost everything.

## 10.1.0 - 21 September 2019

### Changed

- Changed a bunch of dependencies to `devDependencies`.
- Changed the `src` directory to `lib`.

## 10.0.6 - 11 September 2019

### Removed

- Removed `max-lines-per-function` option for compatibility with prettier.

## 10.0.5 - 11 September 2019

### Removed

- Removed `requireForBlockBody` option from `arrow-parens` for compatibility with prettier.
- Removed `operator-linebreak` option for compatibility with prettier.

## 10.0.4 - 11 September 2019

### Removed

- Remove padded block rule that conflicts with prettier.

## 10.0.3 - 19 August 2019

### Removed

- Remove additional rules that conflict with prettier.

## 10.0.2 - 17 August 2019

### Fixed

- Fixed yarn.lock conflict.

## 10.0.1 - 17 August 2019

### Removed

- Remove stylelint from eslint settings.

## 10.0.0 - 16 August 2019

### Changed

- Improved package versioning requirements.
- Cleaned up the rules.

## 9.1.1 - 29 June 2019

### Fixed

- Fixed `eslint-comments` plugin.

## 9.1.0 - 19 June 2019

### Added

- Added `eslint-plugin-jsdoc`.

### Changed

- Updated `confusing-browser-globals` to v1.0.7.
- Updated `babel-eslint` to v10.0.2.
- Updated `eslint-plugin-import` to v2.17.3.
- Updated `eslint-plugin-react` to v7.13.0.

## 9.0.1 - 13 April 2019

### Added

- Add some missing rules through the recommended rules for each plugin.

## 9.0.0 - 13 April 2019

### Added

- Added support for react.

### Changed

- Start fresh from a fresh version 9.0.0.

## 5.14.1 - 27 February 2019

### Added

- Added compatibility with eslint 5.14.1.

### Changed

- Changed the package name back to eslint-config-allanchau.

## 8.1.4 - 24 November 2018

### Removed

- Remove multiline-ternary rule.

## 8.1.3 - 22 November 2018

### Removed

- Remove prettier.

## 8.1.2 - 22 November 2018

### Removed

- Remove prettier.

## 8.1.1 - 2 November 2018

### Added

- Add prettier extensions.

## 8.1.0 - 2 November 2018

### Added

- Add prettier extensions.

## 8.0.0 - 2 November 2018

### Added

- Added `no-async-promise-executor`.
- Added `require-atomic-updates`.
- Added `max-classes-per-file`.
- Added `require-unicode-regexp`.

### Changed

- Make `no-extra-parens` an error.
- Make `consistent-return` error.
- Make `init-declarations` an error.
- Changed `multiline-ternary` to `always-multiline`.
- Changed `padded-blocks` to `always`.
- Make `prefer-object-spread` error.
- Removed the two different rules, there is now only the single set of rules for node and the browser (use webpack).

## 7.0.2 - 31 July 2018

### Removed

- Remove `prefer-object-spread` that wasn't working properly.

## 7.0.1 - 29 June 2018

### Changed

- Update node parser version to 8.
- Fix broken rule.

## 7.0.0 - 29 June 2018

### Changed

- Reverted back to using es6 and scripts for node.
- `arrow-body-style` now use the eslint default.
- `class-methods-use-this` is now an error.

### Removed

- Removed `jasmine`, `mocha`, `phantomjs`, `qunit` env variables.

## 6.0.0 - 9 April 2018

### Added

- Added `es6` environment to prevent Promise is undefined errors.

## 6.0.0 - 19 March 2018

### Changed

- Update `ecmaVersion` to 8.

## 5.7.2 - 19 March 2018

### Changed

- Increase the max nested callbacks rule to fix some bugs within promises.

## v5.6.0 - 23 January 2018

### Changed

- Increase the `max-len` rule to be a safe GitHub editor length.

## v5.6.0 - 23 January 2018

### Changed

- Update ESLint to 4.16.0
- The `allowMultiplePropertiesPerLine` option in the `object-property-newline` rule has been renamed to `allowAllPropertiesOnSameLine` to more clearly convey what the option does. `allowMultiplePropertiesPerLine` still works, but has been deprecated.

## v5.5.0 - 23 January 2018

### Changed

- Update ESLint to 4.15.0

## v5.4.0 - 23 January 2018

### Changed

- Update ESLint to 4.14.0

## v5.3.1 - 23 January 2018

### Changed

- Update ESLint to 4.13.1

## v5.3.0 - 23 January 2018

### Changed

- Update ESLint to 4.13.0

## v5.2.0 - 29 November 2017

### Added

- Added support for ESLint 4.12.1
- Add support for eslint-plugin-eslint-comments 2.0.1

## v5.1.0 - 21 September 2017

### Added

- Add support for ESLint 4.10.0.
- Add support for ESLint 4.9.0.
- Added the default `multiline-comment-style` rules.
- Added the default `lines-between-class-members` rules.

## v5.0.0 - 21 September 2017

### Changed

- Move back to Yarn.
- Move back to GitHub.

### Removed

- Remove `consistent-return` since it is broken with promises.

## v4.2.0 - 3 September 2017

### Added

- Add new `function-paren-newline` rule.

## v4.1.0 - 12 August 2017

### Added

- Add the `getter-return` rule.

### Removed

- Remove `eslint-comments/no-use`.
- Remove `array-element-newline` as it doesn't do what I intended.

## v4.0.2 - 10 July 2017

### Fixed

- Fix path issues.

## v4.0.1 - 9 July 2017

### Fixed

- Fix path issues.

## v4.0.0 - 9 July 2017

### Changed

- Increase `newline-per-chained-call` chain depth to 2.
- Compatibility with ESLint v4.0.0.

### Fixed

- Fixed instructions to use browser (ES5) code.

### Removed

- Removed `no-magic-numbers` rule.

## v3.0.3 - 3 June 2017

- Remove `arrow-body-style` rule that was conflicting with the `max-len` rule.

## v3.0.2 - 10 May 2017

### Fixed

- Fix typo.

## v3.0.1 - 10 May 2017

### Fixed

- Fix path.

## v3.0.0 - 10 May 2017

### Changed

- Replace `eslint:recommended` with the actual rules.
- Split the rules up to allow browser code.
- Add ESLint as a peerDependency.
- Remove support for switches.

## v2.2.0 - 4 May 2017

### Changed

- Allow the `delete` keyword.

## v2.1.0 - 20 April 2017

### Changed

- Use es6 modules by default.

## v2.0.0 - 5 April 2017

### Added

- Add `no-restricted-syntax` and restrict the use of `get`, `set`, `delete`, and `else`.

### Changed

- Update `func-style` to use `expression` and `allowArrowFunctions`.
- Use double quotes for `jsx-quotes`.
- Increase `max-len` to 100 characters.

## v1.0.2 - 26 March 2017

### Added

- Add full list of rules not covered in `eslint:recommended`.

### Changed

- Update package.json metadata.

## v1.0.1 - 26 March 2017

### Added

- Add `Router` to `new-cap` exceptions.

## v1.0.0 - 18 March 2017

### Added

- Initial release.
