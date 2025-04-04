const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");

const browserConfig = {
  chrome: {
    driver: chrome,
    options: new chrome.Options(),
  },
  firefox: {
    driver: firefox,
    options: new firefox.Options(),
  },
};

// Function to create a WebDriver instance for a specific browser
async function createDriver(browserName) {
  const config = browserConfig[browserName];
  if (!config) {
    throw new Error(`Unsupported browser: ${browserName}`);
  }

  const driver = await new Builder()
    .forBrowser(browserName)
    .setChromeOptions(config.options) // Set browser-specific options
    .setFirefoxOptions(config.options)
    .build();

  return driver;
}

module.exports = { createDriver };
