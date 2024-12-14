import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js - from Mistral-large
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-api-key',
            value: process.env.MISTRAL_API_KEY,
          },
        ],
      },
    ];
  },
};


export default nextConfig;
