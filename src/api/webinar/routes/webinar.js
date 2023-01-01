"use strict";

/**
 * webinar router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::webinar.webinar');
module.exports = createCoreRouter("api::webinar.webinar", {
  // ...
  routes: [
    {
      method: "GET",
      path: "/webinars/:slug",
      handler: "webinar.findOne",
      config: {
        auth: false,
      },
    },
  ],

  // disables every action except `find` and `findOne`.
});
