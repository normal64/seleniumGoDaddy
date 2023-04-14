const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const should = require("chai").should();
describe("tasks for goDaddy", function () {
  //it block
  it("automate first links", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app
    await driver.get("https://www.godaddy.com/");
    await driver.manage().window().maximize();

    const hamburgerMenu = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu.click();
    const hamburgerMenuDomenNames = await driver.findElement(
      By.className("fvfew97")
    );
    await hamburgerMenuDomenNames.click();
    const searchDomen = await driver.findElement(
      By.css(`[data-track-name="domains_search_for_domain_names"]`)
    );
    await searchDomen.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitle =
      "Wyszukiwarka domen GoDaddy – kup i zarejestruj dostępne nazwy domen";
    const title = await driver.getTitle();
    console.log(title);
    await title.should.equal(expectedDomenPageTitle);
    setInterval(function () {
      driver.quit();
    }, 5000);
  });
});
