const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1820,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    },
});
