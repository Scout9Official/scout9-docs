import { ReactNode } from 'react';

export default function DocSectionLayout({
                                           children,
                                         }: {
  children: ReactNode;
}) {
  return (
    <div id="doc-section-layout">
      {children}
    </div>
  );
}
