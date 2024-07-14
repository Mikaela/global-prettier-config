/**
 * https://prettier.io/docs/en/configuration.html
 */
const config = {
  bracketSameLine: true,
  endOfLine: "auto",
  insertPragma: true,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  plugins: ["prettier-plugin-sh"],
  proseWrap: "always",
  quoteProps: "consistent",
  requirePragma: false,
  singleAttributePerLine: true,
};

module.exports = config;
