const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const fs = require("fs");

async function scrape() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.youtube.com/@steamcode4441/featured");
  let acceptButton = await driver.findElement(
    By.className(
      "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 IIdkle"
    )
  );
  await driver.executeScript("arguments[0].click()", acceptButton);
  //get all the links
  let links = await driver.findElements(By.tagName("a"));
  //log all text links to the console
  for (let link of links) {
    console.log(await link.getText());
  }
  //display a specific line in the page
  let line = await driver.findElement(By.partialLinkText("Arduino"));
  console.log(await line.getText());
}
scrape();
