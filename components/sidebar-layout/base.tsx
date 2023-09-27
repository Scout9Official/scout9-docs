import S9Navbar from '@/components/navbar/S9Navbar';
import SidebarLayoutMenu from '@/components/sidebar-layout/SidebarLayoutMenu';
import SidebarLayoutMobileMenu from '@/components/sidebar-layout/SidebarLayoutMobileMenu';
import { ISidebarLayout } from '@/components/sidebar-layout/props';


export default function SidebarLayoutBaseComponent(props: ISidebarLayout) {
  const {id, children, navbar, showQuickSearch, hideSidebar, items, pathName, bottom} = props;
  return (
    <div id={id} className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      {navbar ? navbar : <S9Navbar />}
      {!hideSidebar && <div className="hidden lg:flex flex-1 flex-col fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
        <SidebarLayoutMenu items={items} showQuickSearch={!!showQuickSearch} pathName={pathName || ''}/>
        <div className="flex flex-col grow justify-end py-8">
          {bottom}
        </div>
      </div>}

      <div className={!hideSidebar ?  `lg:pl-[19.5rem]` : ''}>
        <div className={`max-w-3xl mx-auto md:pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:p${hideSidebar ? 'x' : 'r'}-16`}>
          {!hideSidebar && <div className="block lg:hidden">
            <SidebarLayoutMobileMenu items={items} showQuickSearch={!!showQuickSearch} pathName={pathName || ''}>
              <div className="flex flex-col grow justify-end py-8">
                {bottom}
              </div>
            </SidebarLayoutMobileMenu>
          </div>}
          {children}
        </div>
      </div>

    </div>
  );
}
