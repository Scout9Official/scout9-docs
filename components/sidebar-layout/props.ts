import { ReactNode } from 'react';

export interface ISidebarLayout {
  id: string;
  children: ReactNode;
  navbar?: ReactNode;
  showQuickSearch?: boolean;
  hideSidebar?: boolean;
  pathName?: string;
  items: ISidebarItem[];
  bottom?: ReactNode;
}

export interface ISidebarItem {
  id: string;
  name: string;
  href: string;
  items?: ISidebarItem[];
}
