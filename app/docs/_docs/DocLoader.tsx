import { DocLoaderClientComponent } from '@/app/docs/_docs/DocLoaderClient';
import DocLoaderServerComponent from '@/app/docs/_docs/DocLoaderServer';
import { IDocLoader } from '@/app/docs/_docs/props';
import { Suspense } from 'react';


export default function DocLoader(props: IDocLoader) {
  return (
    <Suspense fallback={<DocLoaderServerComponent {...props}/>}>
      <DocLoaderClientComponent {...props} />
    </Suspense>
  );
}
