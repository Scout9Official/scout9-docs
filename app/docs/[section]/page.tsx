import { redirect } from 'next/navigation';

export default function DocSectionPage(
  {
    params
  }: {
    params: { section: string };
  }
) {
  // Invalid route, must provide a doc id
  redirect('/docs');
  return (<div id="doc-guide-section"/>);
}
