const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
 const chrome = require("selenium-webdriver/chrome");
 const axios = require('axios');

const should = require("chai").should();

describe("task for go phptravels", async function () {
  it("automate all links", async function () {
    //create driver
    // Set up the Selenium driver
    const driver = await new Builder().forBrowser("chrome").build();

    // Navigate to the webpage
    driver.get("https://phptravels.com/demo/");

    // Find all the links on the page
    const links = driver.findElements(By.tagName("a"));

    // Log the href attribute of each link to the console
    links.then(function (elements) {
      elements.forEach(function (element) {
        element.getAttribute("href").then(function (href) {
          console.log(href);
          checkLink(href)
        });
      });
    });

    setTimeout(async function () {
      await driver.quit();
    }, 5000);
  });
});

async function checkLink(url) {
  try {
    const response = await axios.get(url);
    if (response.status >= 400 && response.status <= 599) {
      console.log(`Link ${url} is broken`);
    } else {
      console.log(`Link ${url} is not broken`);
    }
  } catch (error) {
    console.log(`Link ${url} is broken`);
  }
}