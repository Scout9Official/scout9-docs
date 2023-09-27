'use client';

import SidebarLayoutBaseComponent from '@/components/sidebar-layout/base';
import { ISidebarLayout } from '@/components/sidebar-layout/props';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export interface ISidebarLayoutClientComponent extends ISidebarLayout {
}

export default function SidebarLayoutClientComponent(props: ISidebarLayoutClientComponent) {
  const pathName = usePathname();
  return (<SidebarLayoutBaseComponent {...props} pathName={pathName} navbar={<Fragment/>}/>);
}
