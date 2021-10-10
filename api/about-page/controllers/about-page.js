'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        const entity = await strapi.services['about-page'].find();
        return sanitizeEntity(entity, { model: strapi.models['about-page'] });
    }
};
