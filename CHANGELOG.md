# Changelog

## 8.1.3 - 22 November 2018

- Remove prettier.

## 8.1.2 - 22 November 2018

- Remove prettier.

## 8.1.1 - 2 November 2018

- Add prettier extensions.

## 8.1.0 - 2 November 2018

- Add prettier extensions.

## 8.0.0 - 2 November 2018

- Make `no-extra-parens` an error.
- Added `no-async-promise-executor`.
- Added `require-atomic-updates`.
- Make `consistent-return` error.
- Added `max-classes-per-file`.
- Added `require-unicode-regexp`.
- Make `init-declarations` an error.
- Changed `multiline-ternary` to `always-multiline`.
- Changed `padded-blocks` to `always`.
- Make `prefer-object-spread` error.
- Removed the two different rules, there is now only the single set of rules for node and the browser (use webpack).

## 7.0.2 - 31 July 2018

- Remove `prefer-object-spread` that wasn't working properly.

## 7.0.1 - 29 June 2018

- Update node parser version to 8.
- Fix broken rule.

## 7.0.0 - 29 June 2018

- Reverted back to using es6 and scripts for node.
- `arrow-body-style` now use the eslint default.
- Removed `jasmine`, `mocha`, `phantomjs`, `qunit` env variables.
- `class-methods-use-this` is now an error.

## 6.0.0 - 9 April 2018

- Added `es6` environment to prevent Promise is undefined errors.

## 6.0.0 - 19 March 2018

- Update `ecmaVersion` to 8.

## 5.7.2 - 19 March 2018

- Increase the max nested callbacks rule to fix some bugs within promises.

## v5.6.0 - 23 January 2018

- Increase the `max-len` rule to be a safe GitHub editor length.

## v5.6.0 - 23 January 2018

- Update ESLint to 4.16.0
- The `allowMultiplePropertiesPerLine` option in the `object-property-newline` rule has been renamed to `allowAllPropertiesOnSameLine` to more clearly convey what the option does. `allowMultiplePropertiesPerLine` still works, but has been deprecated.

## v5.5.0 - 23 January 2018

- Update ESLint to 4.15.0

## v5.4.0 - 23 January 2018

- Update ESLint to 4.14.0

## v5.3.1 - 23 January 2018

- Update ESLint to 4.13.1

## v5.3.0 - 23 January 2018

- Update ESLint to 4.13.0

## v5.2.0 - 29 November 2017

- Added support for ESLint 4.12.1
- Add support for eslint-plugin-eslint-comments 2.0.1

## v5.1.0 - 21 September 2017

- Add support for ESLint 4.10.0.
- Add support for ESLint 4.9.0.
- Added the default `multiline-comment-style` rules.
- Added the default `lines-between-class-members` rules.

## v5.0.0 - 21 September 2017

- Remove `consistent-return` since it is broken with promises.
- Move back to Yarn.
- Move back to GitHub.

## v4.2.0 - 3 September 2017

- Add new `function-paren-newline` rule.

## v4.1.0 - 12 August 2017

- Remove `eslint-comments/no-use`.
- Remove `array-element-newline` as it doesn't do what I intended.
- Add the `getter-return` rule.

## v4.0.2 - 10 July 2017

- Fix path issues.

## v4.0.1 - 9 July 2017

- Fix path issues.

## v4.0.0 - 9 July 2017

- Removed `no-magic-numbers` rule.
- Increase `newline-per-chained-call` chain depth to 2.
- Compatibility with ESLint v4.0.0.
- Fixed instructions to use browser (ES5) code.

## v3.0.3 - 3 June 2017

- Remove `arrow-body-style` rule that was conflicting with the `max-len` rule.

## v3.0.2 - 10 May 2017

- Fix typo.

## v3.0.1 - 10 May 2017

- Fix path.

## v3.0.0 - 10 May 2017

- Replace `eslint:recommended` with the actual rules.
- Split the rules up to allow browser code.
- Add ESLint as a peerDependency.
- Remove support for switches.

## v2.2.0 - 4 May 2017

- Allow the `delete` keyword.

## v2.1.0 - 20 April 2017

- Use es6 modules by default.

## v2.0.0 - 5 April 2017

- Update `func-style` to use `expression` and `allowArrowFunctions`.
- Use double quotes for `jsx-quotes`.
- Increase `max-len` to 100 characters.
- Add `no-restricted-syntax` and restrict the use of `get`, `set`, `delete`, and `else`.

## v1.0.2 - 26 March 2017

- Add full list of rules not covered in `eslint:recommended`.
- Update package.json metadata.

## v1.0.1 - 26 March 2017

- Add `Router` to `new-cap` exceptions.

## v1.0.0 - 18 March 2017

- Initial release.
