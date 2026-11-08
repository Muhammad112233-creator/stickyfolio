/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  // Allow the Arena/E2B live-preview host during local development.
  allowedDevOrigins: ['*.e2b.app', 'localhost', '127.0.0.1']
};

export default nextConfig;
