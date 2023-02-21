const nextTranslate = require("next-translate");
const locales = require("./locales.json");

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["sanelrsiranshutprod001.blob.core.windows.net"],
  },
  i18n: {
    locales: locales.map(({ key }) => key),
    defaultLocale: locales[0].key,
    localeDetection: true,
  },
  /* This is temporary */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/victims",
        permanent: false,
      },
    ];
  },
});

module.exports = nextConfig;
