// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/scarborough-stem-alliance' : '',
  assetPrefix: isProd ? '/scarborough-stem-alliance/' : '',
};