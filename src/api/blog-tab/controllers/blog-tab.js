"use strict";

/**
 *  blog-tab controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::blog-tab.blog-tab');
module.exports = createCoreController(
  "api::blog-tab.blog-tab",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi.service("api::blog-tab.blog-tab").find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
