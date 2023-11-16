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
            },

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
              'name': 'Register Yourself as an Agent',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section2',
              'name': 'Register Customers',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section3',
              'name': 'Initiate a Conversation',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section4',
              'name': 'Test Your Conversation',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section5',
              'name': 'View Your Conversation',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section6',
              'name': 'Schedule a Conversation',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section7',
              'name': 'Define Workflows',
              href: '/docs/guides/setup',
            },
            {
              'id': 'section8',
              'name': 'Respond to a Customer',
              href: '/docs/guides/setup',
            },
          ]
        }
      ]
    }
  ]
};
