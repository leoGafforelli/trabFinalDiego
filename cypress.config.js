const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://site-hotel-teste-php-teste.000webhostapp.com/admin/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
