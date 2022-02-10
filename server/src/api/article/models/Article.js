const slugify = require("slugify");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
      if (data.category === null) {
        throw new ApplicationError(
          "Please choose category of article! If category not available, you can create new suitable category!"
        );
      }
      if (data.author === null) {
        throw new ApplicationError("Please select author!");
      }
    },
    async beforeUpdate(params, data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
    },
  },
};
