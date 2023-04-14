const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const should = require("chai").should();
describe("task for go dadyy", async function () {
  it("automate all links", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
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
    await driver.get("https://www.godaddy.com/");

    //check second link

    const hamburgerMenu2 = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu2.click();
    const hamburgerMenuDomenNames2 = await driver.findElement(
      By.className("fsp77ll")
    );
    await hamburgerMenuDomenNames2.click();
    const searchDomenTwo = await driver.findElement(
      By.css(`[data-track-name="domains_transfer_domain_names"]`)
    );
    await searchDomenTwo.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitleTwo =
      "Przeniesienie domeny | Przenoszenie nazw domen proste jak nigdy - GoDaddy PL";
    const titleTwo = await driver.getTitle();
    console.log(titleTwo);
    await titleTwo.should.equal(expectedDomenPageTitleTwo);
    await driver.get("https://www.godaddy.com/");

    //check third link

    const hamburgerMenu3 = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu3.click();
    const hamburgerMenuDomenNames3 = await driver.findElement(
      By.className("fsp77ll")
    );
    await hamburgerMenuDomenNames3.click();
    const searchDomen3 = await driver.findElement(
      By.css(`[data-track-name="domains_auctions_for_domain_names"]`)
    );
    await searchDomen3.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitle3 =
      "Aukcje domen | Kupuj i sprzedawaj wyróżniające się domeny w witrynie GoDaddy";
    const title3 = await driver.getTitle();
    console.log(title3);
    console.log(expectedDomenPageTitle3);
    //await title3.should.equal(expectedDomenPageTitle3);

    await driver.get("https://www.godaddy.com/");

    //check fourth link

    const hamburgerMenu4 = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu4.click();
    const hamburgerMenuDomenNames4 = await driver.findElement(
      By.className("fsp77ll")
    );
    await hamburgerMenuDomenNames4.click();
    const searchDomen4 = await driver.findElement(
      By.css(`[data-track-name="domains_domain_value_appraisal"]`)
    );
    await searchDomen4.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitle4 =
      "Darmowe narzędzie do wyceny domeny | Ile warta jest Twoja domena? - GoDaddy PL";
    const title4 = await driver.getTitle();
    console.log(title4);
    await title4.should.equal(expectedDomenPageTitle4);
    await driver.get("https://www.godaddy.com/");
    //check fifth link

    const hamburgerMenu5 = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu5.click();
    const hamburgerMenuDomenNames5 = await driver.findElement(
      By.className("fsp77ll")
    );
    await hamburgerMenuDomenNames5.click();
    const searchDomen5 = await driver.findElement(
      By.css(`[data-track-name="domains_browse_domain_name_options"]`)
    );
    await searchDomen5.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitle5 =
      "Domeny gTLD | Nowe domeny najwyższego poziomu są dostępne - GoDaddy PL";
    const title5 = await driver.getTitle();
    console.log(title5);
    await title5.should.equal(expectedDomenPageTitle5);
    await driver.get("https://www.godaddy.com/");

    //check sixth link

    const hamburgerMenu6 = await driver.findElement(
      By.css(`[aria-label="Open Menu"]`)
    );
    await hamburgerMenu6.click();
    const hamburgerMenuDomenNames6 = await driver.findElement(
      By.className("fsp77ll")
    );
    await hamburgerMenuDomenNames6.click();
    const searchDomen6 = await driver.findElement(
      By.css(`[data-track-name="domains_generate_domain_business_names"]`)
    );
    await searchDomen6.click();
    //wait for new page to load
    await driver.wait(async function () {
      const url = await driver.getCurrentUrl();
      return url !== "https://www.godaddy.com/pl-pl";
    }, 10000);
    const expectedDomenPageTitle6 =
      "Generator nazw domen | Uzyskaj pomysły na nazwę domeny za darmo - GoDaddy PL";
    const title6 = await driver.getTitle();
    console.log(title6);
    await title6.should.equal(expectedDomenPageTitle6);
    await driver.get("https://www.godaddy.com/");
    setTimeout(async function () {
      await driver.quit();
    }, 5000);
  });
});
