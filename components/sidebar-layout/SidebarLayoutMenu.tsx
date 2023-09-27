import { ISidebarItem } from '@/components/sidebar-layout/props';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { DOMAttributes } from 'react';

export interface ISidebarLayoutMenu {
  showQuickSearch?: boolean;
  items: ISidebarItem[];
  linkProps?: DOMAttributes<HTMLAnchorElement>;
  pathName?: string;
}

export default function SidebarLayoutMenu(props: ISidebarLayoutMenu) {
  const {showQuickSearch, items, pathName, linkProps} = props;
  return (
    <nav className="lg:text-sm lg:leading-6 relative">
      {showQuickSearch && <div className="sticky top-0 -ml-0.5 pointer-events-none">
        <div className="h-10 bg-white dark:bg-slate-900"/>
        <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
          <Input
            placeholder="Quick Search"
            endContent={<Kbd>⌘K</Kbd>}
            // startContent={<Search/>}
          />
          <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"/>
        </div>
      </div>}

      <ul>
        {items.map((item) => (
          <li className="mt-12 lg:mt-8" key={item.id}>
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">{item.name}</h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              {(item.items || []).map((innerItem) => (
                <li key={`/docs/${item.id}/${innerItem.id}`}>
                  <a
                    className={`block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 ${(pathName || '') === innerItem.href ? '!border-green-500' : ''}`}
                    href={innerItem.href}
                    {...linkProps}
                  >
                    {innerItem.name}
                  </a>
                  {(innerItem.items || []).length > 0 && (pathName || '').includes(innerItem.href) && <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 mt-2">
                    {(innerItem.items || []).map((innerInnerItem) => (
                      <li key={innerInnerItem.id}>
                        <a
                          className={`block border-l pl-6 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 ${(pathName || '') === innerInnerItem.href ? '!border-green-400' : ''}`}
                          href={innerInnerItem.href}
                        >
                          {innerInnerItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>}
                  {/*<SidebarLayoutShortcut item={innerItem} rootHref={innerItem.href} pathName={pathName}/>*/}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
