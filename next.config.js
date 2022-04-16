const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
