import DocLoader from '@/app/docs/_docs/DocLoader';
import { docManifest } from '@/app/docs/manifest';
import { ReactNode } from 'react';

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}


export default async function DocGuidePageLayout({
                                                   children,
                                                   params
                                                 }: {
  children: ReactNode;
  params: { doc: string; section: string };
}) {

  if (!params.doc) {
    throw new Error('No doc id');
  }
  if (!params.section) {
    throw new Error('No section ID');
  }

  const section = docManifest.items.find((doc) => doc.id === params.section);
  const doc = (section?.items || []).find((doc) => doc.id === params.doc);

  return (
    <div id="guide-layout">
      <header id="header" className="relative z-20">
        <div>
          <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">{section.name}</p>
          <div className="flex items-center">
            <h1
              className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              {doc.name}
            </h1>
          </div>
        </div>
      </header>
      <DocLoader section={params.section} doc={params.doc}/>
      {children}
    </div>
  );
}
