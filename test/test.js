const versionMatcher = require("chromedriver-version-matcher");
const puppeteer = require("puppeteer");

const chrome = require("selenium-webdriver/chrome");

const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://google.com");
  let acceptButton = await driver.findElement(By.id("L2AGLb"));
  await driver.executeScript("arguments[0].click()", acceptButton);

  await driver
    .findElement(By.name("q"))
    .sendKeys("Denis vs Selenium 1 : 1", Key.RETURN);

  // setInterval(function(){
  //     driver.quit();
  // }, 10000);
}

test_case();
