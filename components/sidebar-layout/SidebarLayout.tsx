import SidebarLayoutClientComponent from '@/components/sidebar-layout/client';
import { ISidebarLayout } from '@/components/sidebar-layout/props';
import SidebarLayoutServerComponent from '@/components/sidebar-layout/server';
import { Suspense } from 'react';

export default function SidebarLayout(props: ISidebarLayout) {
  return (
    <Suspense
      fallback={<SidebarLayoutServerComponent {...props}/>}
    >
      <SidebarLayoutClientComponent {...props}/>
    </Suspense>
  )
}
