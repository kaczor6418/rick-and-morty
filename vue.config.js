module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.(svg)$/)
      .use("svg-inline-loader")
      .loader("svg-inline-loader");

    const gqlRule = config.module.rule("graphql");
    gqlRule.uses.clear();
    gqlRule
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader");
  }
};
