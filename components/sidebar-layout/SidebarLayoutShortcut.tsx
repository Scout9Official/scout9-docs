import { ISidebarItem } from '@/components/sidebar-layout/props';

export interface ISidebarLayoutShortcut {
  rootHref: string;
  item: ISidebarItem;
  pathName?: string;
}
export default function SidebarLayoutShortcut(props: ISidebarLayoutShortcut) {
  const { item, rootHref, pathName} = props;

  // const pathName = usePathname();
  if (rootHref !== pathName) {
    return null;
  }

  return (
    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 mt-2">
      {(item.items || []).map((innerItem) => (
        <li key={innerItem.id}>
          <a
            className="block border-l pl-6 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href={innerItem.href}
          >
            {innerItem.name}
          </a>
        </li>
      ))}
    </ul>
  );

}
