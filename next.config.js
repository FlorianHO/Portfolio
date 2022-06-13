/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const nextLangs = {
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
module.exports = nextLangs;
