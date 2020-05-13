# Coronaproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

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

## Project Details:
  # First Step - First Look: A Simple Application to track COVID-19 cases data.
   - Using ```ng generate component chart``` and ```ng generate component table``` to generate Single-page-application (SPA) components for the project. 
   - The components need Angular Service to get data from remote server. In this case, I am messing around with the API from https://api.covid19api.com/.
   - Next, I generate a separated ```app-routing-module``` to build router so that I can create navigation bar. I generated the file using command "ng g m app-routing". (g - generate, m - module).
