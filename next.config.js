/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // modularizeImports: {
  //   "react-hot-toast": {
  //     transform: "react-hot-toast/dist/{{member}}",
  //   },
  // },
  experimental: { appDir: true },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
