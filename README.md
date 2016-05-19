# Equalizei Front

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Setup the project

1. `$ npm install -g angular-cli` - Install the [Angular CLI](https://github.com/angular/angular-cli)
2. `$ git clone https://github.com/equalize-squad/equalizei-front.git` - Clone the project
3. `$ cd equalizei-front` - Go into the project folder
4. `$ npm install` - Install all dependencies

## Running the project

1. `$ ng serve` - Opens the server
2. Open [http://localhost:4200/](http://localhost:4200/)

## Running unit tests

```bash
ng test
```
Tests will execute after a build is executed via [Karma](http://karma-runner.github.io/0.13/index.html)

If run with the watch argument `--watch` (shorthand `-w`) builds will run when source files have changed
and tests will run after each successful build

## Running end-to-end tests

```bash
ng e2e
```

Before running the tests make sure you are serving the app via `ng serve`.

End-to-end tests are ran via [Protractor](https://angular.github.io/protractor/) using [Cucumber](https://github.com/cucumber/cucumber-js/). :grin:

## How to contribute :heart_eyes:

Follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
