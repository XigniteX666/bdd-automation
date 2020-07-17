const { After, AfterAll, Status } = require("cucumber");
const scope = require("./scope");


// Here we clean up the browser session
// After(async function (scenario) {


//   if (scope.browser && scope.context.currentPage) {
//     const cookies = await scope.context.currentPage.cookies();
//     if (cookies && cookies.length > 0) {
//       await scope.context.currentPage.deleteCookie(...cookies);
//       await scope.context.currentPage._client.send("Network.clearBrowserCookies");
//     }
//     await scope.context.currentPage.close();
//     // eslint-disable-next-line require-atomic-updates
//     scope.context.currentPage = null;

//   }
// });

// AfterAll(async () => {

//   if (scope.browser) await scope.browser.close();
// });
