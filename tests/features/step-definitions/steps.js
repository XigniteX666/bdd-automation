const { Before, Given, When, Then } = require('cucumber');
const { expect } = require("chai");

let number1;
let number2;
let result;

Given('the numbers {int} and {int}', function (int, int2) {
  number1 = int;
  number2 = int2;
});

When('they are added together', function () {
  result = number1 + number2;
});

Then('should the result be {int}', function (int) {
  expect(result).equal(int)
});