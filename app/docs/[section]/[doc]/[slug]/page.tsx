'use client';

import useJumpTo from '@/app/docs/[section]/[doc]/[slug]/useJumpTo';

export default function DocGuideSlugPage({params}: {
  params: { doc: string; slug: string; section: string };
}) {

  useJumpTo(params.slug);

  return (<div/>);
}
