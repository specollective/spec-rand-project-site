/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
   /* config options here */
   experimental: {
     images: { unoptimized: true, allowFutureImage: true },
   },
 };

module.exports = nextConfig

