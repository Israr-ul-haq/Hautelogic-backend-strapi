'use strict';

/**
 * get-started service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-started.get-started');
