const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);

        on(
          "file:preprocessor",
          browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
        );

        // Make sure to return the config object as it might have been modified by the plugin.
        return config;
    }

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/BDD/*.feature",
    // specPattern: "cypress/integration/*.cy.js",
    defaultCommandTimeout: 2000
  },
});
