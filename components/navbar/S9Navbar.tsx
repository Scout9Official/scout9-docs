import { siteConfig } from '@/config';
import { Link } from '@nextui-org/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps,
} from '@nextui-org/navbar';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface IS9Navbar extends NavbarProps {
  left?: ReactNode;
  right?: ReactNode;
  center?: ReactNode;
}

export default function S9Navbar(props: IS9Navbar) {
  const { left, right, center, ...navbarProps } = props;

  return (
    <Navbar maxWidth="xl" position="sticky" {...(navbarProps || {})}>

      {/*Left slot*/}
      <NavbarContent className={`sm:basis-full`} justify="start">
        {left ? left :
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Link className="flex justify-start items-center gap-1" href="/">
              <Image src="/SVG/Logo.svg" width="120" height="60" alt="Scout9" />
            </Link>
          </NavbarBrand>
        }
      </NavbarContent>

      {/*Mobile only center slot (center can only be viewed in desktop) */}
      {center && <NavbarContent className="hidden w-full gap-3 sm:flex" justify="end">
        {center}
      </NavbarContent>}

      {/*Desktop only right slot */}
      <NavbarContent className="hidden w-full gap-3 sm:flex" justify="end">
        {right ? right :
          siteConfig.navItems.map((navItem) => (
            <Link
              key={`desktop-nav-item-${navItem.href}`}
              className={clsx(
                // linkStyles({color: 'foreground'}),
                'data-[active=true]:text-primary data-[active=true]:font-medium'
              )}
              color="foreground" // @TODO add active if
              href={navItem.href}
            >
              {navItem.label}
            </Link>
          ))
        }
      </NavbarContent>

      {/*Mobile only right side */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {right ? right : <NavbarMenuToggle />}
      </NavbarContent>

      {/*Mobile only right side, hidden if right slot is provided */}
      {!right && <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((navItem, index) => (
            <NavbarMenuItem key={`${navItem.href}-mobile-${index}`}>
              <Link
                key={`mobile-nav-item-${navItem.href}`}
                className={clsx(
                  // linkStyles({color: 'foreground'}),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground" // @TODO add active if
                href={navItem.href}
              >
                {navItem.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>}

    </Navbar>
  );
}
