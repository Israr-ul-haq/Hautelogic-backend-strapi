"use strict";

/**
 * blog-tab router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::blog-tab.blog-tab');
module.exports = createCoreRouter("api::blog-tab.blog-tab", {
  // ...
  routes: [
    {
      method: "GET",
      path: "/blog-tabs/:slug",
      handler: "blog-tab.findOne",
      config: {
        auth: false,
      },
    },
  ],

  // disables every action except `find` and `findOne`.
});
