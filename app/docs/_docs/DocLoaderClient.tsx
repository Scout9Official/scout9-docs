'use client';

import { IDocLoader } from '@/app/docs/_docs/props';
import GuideSetup from './guides/setup.mdx';
import GetStartedSetup from './get-started/setup.mdx';

/**
 * @TODO be great if we can load mdx on the server
 */
export function DocLoaderClientComponent(props: IDocLoader) {
  const {section, doc} = props;
  switch (section) {
    case 'get-started':
      switch (doc) {
        case 'setup':
          return (<GetStartedSetup/>);
        default:
          throw new Error(`Doc ${doc} not found`);
      }
    case 'guides':
      switch (doc) {
        case 'setup':
          return (<GuideSetup/>);
        default:
          throw new Error(`Doc ${doc} not found`);
      }
    default:
      throw new Error(`Section ${section} not found`);
  }
}
