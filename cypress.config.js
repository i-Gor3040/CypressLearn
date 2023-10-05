const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  experimentalSessionAndOrigin: true,
  chromeWebSecurity: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
    e2e: {
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    baseUrl: 'https://demo.realworld.io/#/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
