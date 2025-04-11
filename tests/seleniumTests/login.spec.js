const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");
const { createDriver } = require("../../selenium-config");

describe("Login", function () {
  //this.timeout(30000);
  let driver;
  beforeEach(async function () {
    vars = {};
    //driver = await createDriver("firefox");
    driver = await createDriver("chrome");
    await driver.get("https://yelpcamp-livg.onrender.com/");
  });
  afterEach(async function () {
    await driver.quit();
  });

  it("login_success", async function () {
    await driver.findElement(By.linkText("Login")).click();
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("username")).sendKeys("amir");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("123");
    await driver.findElement(By.css(".btn")).click();

    let element = await driver.findElement(
      By.className("alert alert-success alert-dismissible fade show")
    );
    let isDisplayed = await element.isDisplayed();
    expect(isDisplayed).to.be.true;

    await driver.findElement(By.linkText("Logout")).click();
  });

  it("login_fail", async function () {
    await driver.findElement(By.linkText("Login")).click();
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("username")).sendKeys("aaa");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("123");
    await driver.findElement(By.css(".btn")).click();

    let element = await driver.findElement(
      By.className("alert alert-danger alert-dismissible fade show")
    );
    let isDisplayed = await element.isDisplayed();
    expect(isDisplayed).to.be.true;
  });
});
