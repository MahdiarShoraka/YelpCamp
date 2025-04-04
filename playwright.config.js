const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    browserName: "chromium",
    channel: "chrome",
    headless: false, // See browser during test, change to true for headless
  },
});
