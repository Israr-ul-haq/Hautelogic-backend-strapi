"use strict";

/**
 *  case-study controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::case-study.case-study");

module.exports = createCoreController(
  "api::case-study.case-study",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service("api::case-study.case-study")
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
