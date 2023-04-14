const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const should = require("chai").should();

describe("tasks for practise godaddy", function () {
  //it block
  it("validate page title", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app
    await driver.get("https://www.godaddy.com/");

    let title = await driver.getTitle();
    console.log(title);
    const expectedTitle =
      "Nazwy domen, witryny, hosting i narzędzia do marketingu internetowego – GoDaddy PL";
    //assert using chai should
    title.should.equal(expectedTitle);

    //url check
    let pageURL = await driver.getCurrentUrl();
    console.log("page url", pageURL);
    const expectedPageURL = "https://www.godaddy.com/pl-pl";
    pageURL.should.equal(expectedPageURL);

    //page source check
    let pageSource = await driver.getPageSource();
    console.log(`pageSource`, typeof pageSource);
    const substring = "<title>";
    console.log("title presence check", pageSource.includes(substring));
    driver.quit();
  });
});
