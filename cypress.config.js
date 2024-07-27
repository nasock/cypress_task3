const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: 'https://conduit.realworld.how/',
    env: {
      email: 'anastasiiafortesting+conduitrealworld@gmail.com',
      password: '!Zxcvbnm1234567890',
      username: 'ann_12345'
    },
  },
});
