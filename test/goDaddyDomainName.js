const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");


const options = new chrome.Options();
options.addArguments("--ignore-certificate-errors");
const should = require("chai").should();


describe("task for go dadyy", async function () {
  it("automate all links", async function () {
    //create driver
    let driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
    //navigate to app
    await driver.get("https://www.godaddy.com/");
    await driver.manage().window().maximize();
    driver.manage().setTimeouts({ implicit: 10000 });
    //check and first link and validate it's title
    const hamburgerMenu = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu.click();
    const hamburgerMenuDomenNames = await driver.findElement(
      By.className("fsp77ll")
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
    try {
      const searchBox = await driver.findElement(
        By.id("8469f0c3-e08f-4343-9756-ce0390b0d581")
      );
      const isEnabled = await searchBox.isEnabled();
      if (isEnabled) {
        console.log("Search box is present and enabled!");
        const buyButton = await driver.findElement(
          By.className("ux-button ux-button-primary")
        );
        const isEnabledButton = await buyButton.isEnabled();
        console.log(`isEnabledButton`, isEnabledButton);
        await searchBox.sendKeys("dean", Key.RETURN);
        //await buyButton.click();
      } else {
        console.log("Search box is not enabled.");
      }
    } finally {
      //
    }

        setTimeout(async function () {
          await driver.quit();
        }, 5000);
  });
});
