# Swag Labs -- testing using the Cypress and Cucumber

## Table of Contents

1. [Summary of Repo](#summary-of-repo)
2. [Requirements](#requirements)
3. [Steps to Install](#steps-to-install)
4. [Steps to Launch and Create a Report](#steps-to-launch-and-create-a-report)

## Summary of Repo

This repository contains automated test cases for [Swag Labs](https://www.saucedemo.com/) implemented using Cypress and Cucumber. <br>
Link to the generated report: https://kristinap8.github.io/cypress-cucumber-saucedemo/.

## Requirements

- Node.js: Ensure you have Node.js installed.
- Cypress: Install Cypress by running `npm install cypress --save-dev`.
- Cypress Cucumber Preprocessor: Install by running `npm install @badeball/cypress-cucumber-preprocessor`.
- Mochawesome reporter for Cypress: Install by running `npm i --save-dev cypress-mochawesome-reporter`.
- Other dependencies: Check the `package.json` file for additional dependencies.

## Steps to Install

1. Clone this repository:

```bash
git clone
https://github.com/kristinap8/cypress-cucumber-saucedemo.git
```

2. Navigate to the project directory:

```bash
cd cypress-cucumber-saucedemo
```

3. Install project dependencies:

```bash
npm install
```

## Steps to Launch:

1. Run tests in Electron in headless mode:

```bash
npm run cy:run
```

2. Run tests in Chrome with different screen resolution (1280x720):

```bash
npm run cy:run:chrome
```

3. Run tests in UI:

```bash
npm run cy:open
```
