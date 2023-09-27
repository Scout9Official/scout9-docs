import { docManifest } from '@/app/docs/manifest';
import SidebarLayout from '@/components/sidebar-layout/SidebarLayout';
import { ReactNode } from 'react';


export default async function DocsLayout({children,}: { children: ReactNode; }) {
  return (
    <SidebarLayout id="ids" items={docManifest.items}>
      {children}
    </SidebarLayout>
  );
}
