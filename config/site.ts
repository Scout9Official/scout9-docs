import { ReactNode } from 'react';

export type SiteConfig = typeof siteConfig;

export interface INavItem {
  label: ReactNode;
  href: string;
}

export const siteConfig = {
  name: 'Scout9',
  description: '24/7 smart guided auto-replies for routine emails or text messages. Business API documentation',
  navItems: [
    {
      label: 'Docs',
      href: '/docs'
    }
  ],
};
