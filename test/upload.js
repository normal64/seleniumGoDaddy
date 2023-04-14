const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver")

async function upload(){
    //create
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://filebin.net/")
    let input = await driver.findElement(By.id("fileField"))
    await input.sendKeys("C:\\Users\\DenisPoplawski\\Documents\\fghg.txt")
    
    const moreButton = await driver.findElement(By.css('#dropdownBinMenuButton .btn .btn-primary .dropdown-toggle .text-white'));
    await moreButton.click();

    // let dropdownMenu =  await driver.findElement(By.css(".dropdown"))
    // await dropdownMenu.click()
}
upload()