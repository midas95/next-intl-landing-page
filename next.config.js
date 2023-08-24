module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {

      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};