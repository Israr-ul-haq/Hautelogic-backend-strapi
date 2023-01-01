'use strict';

/**
 * get-started router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::get-started.get-started');
