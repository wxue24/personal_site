const timelineItem = require("./src/_includes/shortCodes/timelineItem");
const timeline = require("./src/_includes/shortCodes/timeline");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/img");

  eleventyConfig.addShortcode("timeline", timeline);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
