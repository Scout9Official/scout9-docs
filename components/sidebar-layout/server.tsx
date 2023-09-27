import SidebarLayoutBaseComponent from '@/components/sidebar-layout/base';
import { ISidebarLayout } from '@/components/sidebar-layout/props';


export default function SidebarLayoutServerComponent(props: ISidebarLayout) {
  return (<SidebarLayoutBaseComponent {...props}/>);
}
