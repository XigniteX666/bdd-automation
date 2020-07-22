const { setWorldConstructor, setDefaultTimeout } = require("cucumber");
const puppeteer = require("puppeteer");
const scope = require("./scope");



const World = function ({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;


  let opts = {
    headless: true,
    slowMo: 0,
    args: ["--no-sandbox"]
  };


  scope.driver = puppeteer;
  scope.context = {};
  scope.options = opts;


  //Can this be done through settings
  scope.device = {
    //deviceEmulator :  properties.get("test.device")
  };
};

setDefaultTimeout(60 * 3000);
setWorldConstructor(World);