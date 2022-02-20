// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "ik.imagekit.io", "localhost", "d19bos5qssbslz.cloudfront.net", "kigzag-video-thumbnail.s3.eu-north-1.amazonaws.com"],
    formats: ["image/webp"],
  },
};