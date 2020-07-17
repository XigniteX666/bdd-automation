const { When, Then, And, Given } = require("cucumber")
const scope = require("../utils/scope");
const puppeteer = require("puppeteer")
const { expect } = require("chai");

Given("The browser is open", async function () {
  scope.browser = await puppeteer.launch(scope.options)
  scope.page = await scope.browser.newPage();
})

When('open the Jumbo page', async function () {
  await scope.page.goto("https://google.com")
});


Then('the title should be {string}', async function (title) {
  const pageTitle = await scope.page.title();
  expect(title).equal(pageTitle);

});