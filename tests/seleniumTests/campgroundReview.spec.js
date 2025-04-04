const { Builder, By, Key, until } = require("selenium-webdriver");
const { createDriver } = require("../../selenium-config");

describe("campground_review", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    //driver = await createDriver("firefox");
    driver = await createDriver("chrome");
    await driver.get("https://yelpcamp-livg.onrender.com/");
    await driver.manage().window().maximize();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("campground_review", async function () {
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
    await driver.sleep(1000);
    await driver.findElement(By.css("label:nth-child(9)")).click();
    await driver.findElement(By.id("body")).click();
    await driver.findElement(By.id("body")).sendKeys("test");
    await driver.findElement(By.css(".btn-success")).click();
    await driver.executeScript("window.scrollBy(0, 500);"); // Scroll down by 500 pixels
    await driver.sleep(1000);
    await driver.findElement(By.css("#review_delete")).click();
    await driver.findElement(By.css(".btn-danger")).click();
    await driver.findElement(By.linkText("Logout")).click();
  });
});
