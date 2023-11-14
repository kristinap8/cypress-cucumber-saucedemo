const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress cucumber saucedemo report (tested using different resolution)",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    defaulBrowser: 'chrome',
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
