const slugify = require("slugify");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
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
  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
