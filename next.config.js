const withPWA = require("next-pwa")({ dest: "public" });

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = withPWA({
    experimental: {
      appDir: false,
    },
    pwa: {
      dest: "public",
      // disable: process.env.NODE_ENV === "development",
      // register: true,
      // scope: "/",
      // skipWaiting: true,
      swSrc: "service-worker.js",
    },
  });
  return nextConfig;
};

// module.exports = nextConfig;
