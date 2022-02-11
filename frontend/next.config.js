// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "ik.imagekit.io"],
    formats: ["image/webp"],
  },
};
