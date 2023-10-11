const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  env: {
    email: 'igor@yopmail.com',
    incorrectEmail: 'incorrect@email.com',
    password: 'Test123@',
    incorrectPSWD: 'Test12@',
    username: 'Igor963'
  },
    e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
