import { Providers } from '@/app/providers';
import S9Navbar from '@/components/navbar/S9Navbar';
import { siteConfig } from '@/config';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    // icon: "/favicon.ico",
    icon: '/SVG/Icon_64x64.svg',
    shortcut: '/SVG/Icon_16x16.svg',
    apple: '/apple-touch-icon.png', // @TODO replace with actual icon
  },
};


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <S9Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
