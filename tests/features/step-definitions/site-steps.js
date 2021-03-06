const { When, Then, And, Given } = require("cucumber")
const scope = require("../utils/scope");
const puppeteer = require("puppeteer")
const { expect } = require("chai");

Given("The browser is open", async function () {
  scope.browser = await puppeteer.launch(scope.options)
  scope.context.currentPage = await scope.browser.newPage();
})

When('open the homepage', async function () {
  await scope.context.currentPage.goto("https://acc-ish.jumbo.com/INTERSHOP/web/WFS/Jumbo-Grocery-Site/nl_NL/-/EUR/ViewLogin-Start?SourceURL=ViewMyJumbo-Start")
  let screenshot = await scope.context.currentPage.screenshot();
  this.attach(screenshot, "image/png");
});


Then('the title should be {string}', async function (title) {
  const pageTitle = await scope.context.currentPage.title();
  expect(title).equal(pageTitle);

});