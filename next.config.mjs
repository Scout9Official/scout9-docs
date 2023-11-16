/** @type {import('next').NextConfig} */
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import createMdx from '@next/mdx'

const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: false // For /docs
  },
  images: {
    domains: [
      // 'firebasestorage.googleapis.com',
      // 'media.graphassets.com'
    ]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // For /docs
  redirects: () => {
    return [
      {
        source: '/docs',
        destination: '/docs/get-started/setup',
        permanent: true
      }
    ]
  }
};

const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    //providerImportSource: '@mdx-js/react'
  },// Used to convert docs to MDX

});
export default withMDX(nextConfig);
