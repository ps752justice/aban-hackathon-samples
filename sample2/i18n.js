const locales = require("./locales.json");

module.exports = {
  locales: locales.map(({ key }) => key),
  defaultLocale: locales[0].key,
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/victims": ["victims"],
    "/victim": ["victim"],
  },
};
