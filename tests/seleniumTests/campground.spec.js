const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");
const { createDriver } = require("../../selenium-config");

describe("campground_success", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await createDriver("firefox");
    //driver = await createDriver("chrome");
    await driver.get("https://yelpcamp-livg.onrender.com/");
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });

  it("campground_success", async function () {
    await driver.findElement(By.linkText("Login")).click();
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("username")).sendKeys("amir");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("123");
    await driver.findElement(By.css(".btn")).click();
    await driver.findElement(By.linkText("Add Campground")).click();
    await driver.findElement(By.id("title")).click();
    await driver.findElement(By.id("title")).sendKeys("test");
    await driver.findElement(By.id("location")).click();
    await driver.findElement(By.id("location")).sendKeys("test");
    await driver.findElement(By.id("price")).click();
    await driver.findElement(By.id("price")).sendKeys("12");
    await driver.findElement(By.id("description")).click();
    await driver.findElement(By.id("description")).sendKeys("test");
    await driver.findElement(By.css(".btn")).click();
    await driver.findElement(By.css(".btn-danger")).click();

    let element = await driver.findElement(
      By.className("alert alert-success alert-dismissible fade show")
    );
    let isDisplayed = await element.isDisplayed();

    expect(isDisplayed).to.be.true;

    await driver.findElement(By.linkText("Logout")).click();
  });

  it("campground_fail", async function () {
    await driver.findElement(By.linkText("Login")).click();
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("username")).sendKeys("amir");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("123");
    await driver.findElement(By.css(".btn")).click();
    await driver.findElement(By.linkText("Add Campground")).click();
    await driver.findElement(By.id("title")).click();
    await driver.findElement(By.id("title")).sendKeys("test");
    await driver.findElement(By.id("price")).click();
    await driver.findElement(By.id("price")).sendKeys("12");
    await driver.findElement(By.id("description")).click();
    await driver.findElement(By.id("description")).sendKeys("test");
    await driver.findElement(By.css(".btn")).click();

    let element = await driver.findElement(By.id("location"));
    let isDisplayed = await element.isDisplayed();

    expect(isDisplayed).to.be.true;

    await driver.findElement(By.linkText("Logout")).click();
  });
});
