import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// // registerApplication({
// //   name: "@test/navbar",
// //   app: () => System.import("@test/navbar"),
// //   activeWhen: ["/"]
// // });

// start({
//   urlRerouteOnly: true,
// });

registerApplication({
  name: "@test/nav",
  app: () => System.import("@test/nav"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@test/page1",
  app: () => System.import("@test/page1"),
  activeWhen: ["/page1"],
});

registerApplication({
  name: "@test/page2",
  app: () => System.import("@test/page2"),
  activeWhen: ["/page2"],
});

start();
