//by lambda
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");
const should =require("chai").should();

//describe
describe("add todo test", function(){

  //it block
  it("successfully adds a todo to application", async function(){
    
  })
});


async function todo() {
  //creat driver
  let driver = await new Builder().forBrowser("chrome").build();
  //navigate to app
  await driver.get("https://lambdatest.github.io/sample-todo-app/");
  //add to do
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("learn selenium", Key.RETURN);

  //assert
  let todoText = await (
    await driver.findElement(By.xpath("//li[last()]"))
  ).getText().then( (value) =>{
      return value
  });
  //assert using node assertion
  //assert.strictEqual(todoText,"learn selenium")
  //assert using chai should
  todoText.should.equal("learn selenium")
  //close browser
  setInterval(function () {
    driver.quit();
  }, 5000);
}
todo();
