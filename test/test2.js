const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


async function test_case() {
  //create driver
  let driver = await new Builder().forBrowser("chrome").build();

  //send driver to website
  await driver.get("https://youtube.com/");
  //grab an element from the page
  let acceptButton = await driver.findElement(
    By.className(
      "yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response-inverse"
    )
  );
  await driver.executeScript("arguments[0].click()", acceptButton);
  async function test() {
    try {
      await driver.get("https://www.youtube.com/");
      await driver.wait(until.elementLocated(By.name("search_query")), 10000); // wait for search bar to load
      let searchBar = await driver.findElement(By.name("search_query"));
      await searchBar.sendKeys("selenium javascript", Key.RETURN);
    } finally {
      // await driver.quit();
    }
  }
  test();

}
test_case();
