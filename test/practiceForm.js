const { By, Key, Builder, Select } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const axios = require("axios");
const should = require("chai").should();
const { expect } = require("chai");
const { until } = require("selenium-webdriver/lib/until");
const { ExpectedConditions } = require("selenium-webdriver");

describe("task for go phptravels", async function () {
  it("automate all links", async function () {
    //create driver
    // Set up the Selenium driver
    const driver = await new Builder().forBrowser("chrome").build();

    // Navigate to the webpage
    driver.get("https://www.techlistic.com/p/selenium-practice-form.html");

    // Find all the links on the page
    const acceptCookies = await driver.findElement(By.id("ez-accept-all"));
    acceptCookies.click();
    await driver.sleep(5000);
    driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
    // // Wait for the ad to load and then close it
    // await driver.wait(until.elementLocated(By.id("div-gpt-ad-techlistic_com-medrectangle-2-0")));
    // await driver.executeScript("document.getElementById('div-gpt-ad-techlistic_com-medrectangle-2-0').remove();");

    const firstName = await driver.findElement(By.name("firstname"));
    await firstName.sendKeys("Denis");
    const secondName = await driver.findElement(By.name("lastname"));
    await secondName.sendKeys("Poplavskii");
    const gender = await driver.findElement(By.id("sex-1"));
    await gender.click();
    //  const exp = await driver.findElement(By.id("exp-3"));
    //  await exp.click()
    // const cookieNotification = await driver.findElement(By.className("cookie-choices-text"));
    // await driver.wait(until.elementIsNotVisible(cookieNotification));
    // const wait = new WebDriverWait(driver, 10);
    // const exp = await wait.until(until.elementToBeClickable(By.id("exp-3")));
    // await exp.click();
    const date = await driver.findElement(By.id("datepicker"));
    await date.sendKeys("2023.04.15");
    //  const professionAQA = await driver.findElement(By.id("profession-1"));
    // await professionAQA.click();
    // const aTool = await driver.findElement(By.id("tool-2"));
    // await aTool.click();

    //selecting continent option
    const dropdown = await driver.findElement(By.id("continents"));
    const select = await new Select(dropdown);
    await select.selectByIndex(1); // selects the second option
    //selecting selenium commands
    const dropdown2 = await driver.findElement(By.id("selenium_commands"));
    const select2 = await new Select(dropdown2);
    await select2.selectByIndex(0);
    await select2.selectByIndex(4); // selects the second option

    let uploadImage = await driver.findElement(By.id("photo"));
    await uploadImage.sendKeys("C:\\Users\\DenisPoplawski\\Documents\\123.png");

    const submit = await driver.findElement(By.id("submit"));
    await submit.click();
    // setTimeout(async function () {
    //   await driver.quit();
    // }, 5000);
  });
});
