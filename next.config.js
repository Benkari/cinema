/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "de.web.img3.acsta.net",
      "www.tasteofcinema.com",
      "image.tmdb.org",
    ],
  },
  nextConfig,
};
