const { When, Then, And, Given } = require("cucumber")
const scope = require("../utils/scope");
const puppeteer = require("puppeteer")

Given("The browser is open", async function () {
  this.browser = await puppeteer.launch(scope.options)
  this.page = await this.browser.newPage();
})

When('open the Google page', async function () {
  await this.page.goto("https://google.com")
});

When('search for chercher tech', async function () {

});

Then('Count the results', async function () {
  this.browser.close()
});