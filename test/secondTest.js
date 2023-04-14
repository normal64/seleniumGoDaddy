//by lambda
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const should = require("chai").should();

//describe
describe("add another todo test", function () {
  //it block
  it("successfully adds another todo to application", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //add to do
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("learn selenium", Key.RETURN);

    //assert
    let todoText = await (await driver.findElement(By.xpath("//li[last()]")))
      .getText()
      .then((value) => {
        return value;
      });

    //assert using chai should
    todoText.should.equal("learn selenium");
    //close browser
    // setInterval(function () {
    //   driver.quit();
    // }, 5000);
  });
  it("adding a new test for reporting", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //add to do
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("learn selenium", Key.RETURN);

    //assert
    let todoText = await (await driver.findElement(By.xpath("//li[last()]")))
      .getText()
      .then((value) => {
        return value;
      });

    //assert using chai should
    todoText.should.equal("learn selenium");
    //close browser
    // setInterval(function () {
    //   driver.quit();
    // }, 5000);
  });
  it("check first checkbox", async function () {
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //add to do
    let checkbox = await driver.findElement(By.name("li1"));
    checkbox.click()
  });
});
