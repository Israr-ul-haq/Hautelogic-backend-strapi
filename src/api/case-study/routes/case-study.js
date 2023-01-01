"use strict";

/**
 * case-study router.
 */

// const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::case-study.case-study");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::case-study.case-study", {
  // ...
  routes: [
    {
      method: "GET",
      path: "/case-studies/:slug",
      handler: "case-study.findOne",
      config: {
        auth: false,
      },
    },
  ],

  // disables every action except `find` and `findOne`.
});
