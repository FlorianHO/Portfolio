/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

const nextLangs = {
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
};

const nextExtensions = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

const withPWA = require("next-pwa");

const nextPWA = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
module.exports = nextLangs;
module.exports = nextExtensions;
module.exports = nextPWA;
