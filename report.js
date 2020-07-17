const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "output/cucumber_report.json",
  output: "output/cucumber_report.html",
  reportSuiteAsScenarios: false,
  screenshotsDirectory: "output/screenshot",
  storeScreenshots: true,
  launchReport: true,
};

reporter.generate(options);