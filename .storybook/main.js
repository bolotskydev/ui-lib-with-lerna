const path = require("path");
const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../components/**/src/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules = [...config.module.rules, ...custom.module.rules];
    config.resolve.alias = custom.resolve.alias;

    // Return the altered config
    return config;
  },
};
