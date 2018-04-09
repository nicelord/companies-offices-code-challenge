
# Challenge Description

The original challenge required to be done in reacjs framework.
But this one is done with angular 5, with other requirements similiar to the challenge specification, Ex:
- [NgRx](https://github.com/ngrx) used as replacement for redux.
- Webpack seamlesly handled by [Angular CLI](https://github.com/angular/angular-cli)



## Overview page
The section titled “create company” should be able to create new company after filling in necessary information to the form and click the “Create” button.
Moreover, necessary form validations are required, specifically,
1. Form cannot be submitted when any of input box is empty, and necessary required warning message (label or tooltip) should be shown for the invalid inputs.
2. Revenue input should be positive floor number.
3. Two fields of phone number should be both positive integer. Bonus if you can implement country code selection for the “code” input.• The section titled “create office” should be able to create new office under selected company after filling in necessary information to the form and click the “Create” button. Moreover, necessary form validations are required, specifically,

## Office page
1. Form cannot be submitted when any of input box is empty or unselected, and necessary required warning message (label or tooltip) should be shown for the
invalid inputs.
2. Two input fields under location should be both positive float number.
3. Input “Office Start Date” should be able to pop up calendar for user to select the date instead of typing in the date string.
When successfully creating a new company, proper notification message should be shown and new company information should appear in the section titled “Companies” as a new widget. Moreover, the form should be reset for further use.
For each of the company widget under the section titled “Companies”,
1. It need to display the company profile information in the format shown in the overview page.
2. Each company widget is also clickable, which will redirect user to corresponding offices page.
3. When clicking the cross button on the top right corner, a pop up for confirmation need to be shown out and after confirming, the widget will be
removed.
- If there is no company created in the overview page yet, message “there is no companies created yet” should be displayed in the “Companies” section.
Offices Page
- As the design above shown, company information as well as the information for each office need to be display accordingly. When a new office created in the overview page for one company, it needs to be automatically shown for the offices page of this company.
- For each office widget in section titled “offices”, when clicking the cross button on the top right corner, a pop up for confirmation need to be shown out and after
confirming, the widget will be removed.
- If there is no office in the offices page yet, message “there is no office created yet” should be displayed in the “offices” section.
- When clicking the “Back to Overview” page, user will be redirect to the overview page.


# CompaniesOffices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
