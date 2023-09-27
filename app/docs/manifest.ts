import { ISidebarItem } from '@/components/sidebar-layout';


export interface IManifest {
  items: ISidebarItem[];
}

export const docManifest: IManifest = {
  'items': [
    {
      'name': 'Get Started',
      'id': 'get-started',
      href: '/docs/get-started',
      'items': [
        {
          'id': 'setup',
          'name': 'Setup',
          href: '/docs/get-started/setup',
          'items': [
            {
              'id': 'section-1-introduction-to-randomness',
              'name': 'Section 1',
              href: '/docs/get-started/setup'
            },
            {
              'id': 'section-2-famous-random-experiments',
              'name': 'Section 2',
              href: '/docs/get-started/setup'
            }
          ]
        }
      ]
    },
    {
      'name': 'Guides',
      'id': 'guides',
      href: '/docs/guides',
      'items': [
        {
          'id': 'setup',
          'name': 'Setup',
          href: '/docs/guides/setup',
          'items': [
            {
              'id': 'section1',
              'name': 'Section 1',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section2',
              'name': 'Section 2',
              href: '/docs/guides/setup',
            }
          ]
        }
      ]
    }
  ]
};
