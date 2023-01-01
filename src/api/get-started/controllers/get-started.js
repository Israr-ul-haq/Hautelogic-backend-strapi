'use strict';

/**
 *  get-started controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::get-started.get-started');
