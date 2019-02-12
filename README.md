# Angular Project Management Board

This project is created to be used as a test project to demonstrate capababilities of [Storybook](https://storybook.js.org/) for Angular. It uses Angular Material 'Drag and drop' module.

Live example of the project you can check out [HERE](https://mletic.github.io/angular-pm-board/).

Storybook of the project you can check out [HERE](https://mletic.github.io/angular-pm-board/storybook/).

In order to deploy the project on github pages you need to follow next steps:
#### 1. Install dependencies
`npm install`
#### 2. Build project for production
`ng build --prod --base-href='/angular-pm-board/'`
#### 3. Build storybook for production (creates a sub-directory in dist folder)
`npm run storybook-build`
#### 4. Add project to github pages
`npx angular-cli-ghpages`

## Note
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
