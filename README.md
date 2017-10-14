# Write Goodly
Lil web app that helps you write goodly. Live and running [here](https://patrickocoffeyo.github.io/write-goodly).

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn

## Setup
 * Clone this repository.
 * In this repository's root folder, run `yarn`.

## Testing & Linting
This project uses [Jest](https://facebook.github.io/jest/), [ESlint](https://github.com/eslint/eslint) with the [AirBnb standard](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), and [Prettier](https://github.com/prettier/prettier) for testing, linting, and formatting.

 * All test files are suffixed with `.test.js`.
 * To run tests: `yarn test`.
 * To lint this codebase, run: `yarn lint`.
 * To format this codebase, run: `yarn prettier`.
 * To validate flow typing, run: `yarn flow`.
 * NOTE: lint and prettier will be run before a commit is made.

## Building
To build this project, simply run `yarn build`.

## Deployment
Deploying this project is easy. Run `yarn build ; yarn deploy`;
