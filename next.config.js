/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true // For /docs
  },
  images: {
    domains: [
      // 'firebasestorage.googleapis.com',
      // 'media.graphassets.com'
    ]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // For /docs
  redirects: async () => {
    return [
      {
        source: '/docs',
        destination: '/docs/get-started/setup',
        permanent: true
      }
    ]
  }
};

const withMDX = require('@next/mdx')({ // Used to conver docs to MDX
  providerImportSource: '@mdx-js/react'
});
module.exports = withMDX(nextConfig);
