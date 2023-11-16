'use client';

import { subtitle, title } from '@/components/primitives';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Select, SelectItem } from '@nextui-org/select';
import { CheckLinearIcon, CopyLinearIcon } from '@nextui-org/shared-icons';
import { NextUIProvider } from '@nextui-org/system';
import { Tooltip } from '@nextui-org/tooltip';
import { useClipboard } from '@nextui-org/use-clipboard';
import { useThemedStylesWithMdx } from '@theme-ui/mdx';
import Prism from '@theme-ui/prism';
import { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

function removeSpace(string) {
  const newString = string.replaceAll(' ', '-')
  return newString;
}

export interface ProvidersProps {
  children: ReactNode;
}

function CopyCode(props: { code: string }) {
  const { copy, copied } = useClipboard({ timeout: 2000 });

  return (
    <Tooltip content={copied ? 'Copied' : 'Copy code'}>
      <Button
        onClick={() => copy(props.code)}
        isIconOnly
        variant="light"
        size="lg"
        className={`text-violet-500 !bg-transparent`}
      >
        {copied ? <CheckLinearIcon fontSize={24} /> : <CopyLinearIcon fontSize={24} />}
      </Button>
    </Tooltip>
  );
}


const languages = ['typescript', 'python', 'javascript', 'ts', 'js', 'py', 'bash-node', 'bash-web', 'bash-python', 'bash-ts', 'bash-js', 'bash-py', 'bash-typescript'];
const languageIds = languages.map(l => `language-${l}`);
const languageToPlatform = {
  'typescript': 'nodejs',
  'ts': 'nodejs',
  'python': 'python',
  'py': 'python',
  'javascript': 'nodejs',
  'js': 'nodejs',
  'bash-node': 'nodejs',
  'bash-web': 'nodejs',
  'bash-python': 'python',
  'bash-ts': 'nodejs',
  'bash-js': 'nodejs',
  'bash-py': 'python',
  'bash-typescript': 'nodejs',
}
const platforms: Record<string, string[]> = Object.keys(languageToPlatform).reduce((acc, key) => {
  const platform = languageToPlatform[key];
  if (!acc[platform]) {
    acc[platform] = [];
  }
  acc[platform].push(key);
  return acc;
}, {});

const getComponents = (platform: string, setPlatform: (newPlatform: string) => void): MDXComponents => ({
  pre: ({ children, className }) => <>{children}</>,
  code: ({ children, className, ...rest }) => {
    const _languages = platforms[platform];
    if (languageIds.some(l => className.includes(l)) && !_languages.some(l => className.includes(`language-${l}`))) {
      return (<></>);
    }
    return (
      <div className="mt-6 mb-16">
        <div className="w-full flex justify-end">
          <Select
            variant="flat"
            placeholder="Select language"
            selectedKeys={[platform]}
            defaultSelectedKeys={[languages[0]]}
            className="max-w-[120px]"
            radius="lg"
            selectionMode="single"
            color="success"
            onChange={(e) => setPlatform(e.target.value)}
            aria-label={'Select language'}
            size={'sm'}
            disableAnimation={false}
          >
            {Object.keys(platforms)
              .map((l) => (
                <SelectItem key={l} value={l} aria-label={l}>
                  {l}
                </SelectItem>
              ))}
          </Select>
        </div>
        <div className="relative">
          <Prism className={`${className}  rounded-md`}>{children as any}</Prism>
          <div className="absolute top-0 right-0">
            <CopyCode code={children as string} />
          </div>
        </div>
      </div>
    );
  },
  h1: ({ children, className }) => <h1 className={`${title({
    size: 'lg',
    display: 'block'
  })} block text-black-500 pb-4 mt-6 mb-4 ${className}`}>{children}</h1>,
  h2: ({ children, className }) => <h2 id={removeSpace(children)} className={`${title({
    color: 'pink',
    size: 'md',
    display: 'block'
  })} pb-4 mb-4 text-black-500 pt-[80px] mt-[-88px] ${className}`}>{children}</h2>,
  h3: ({ children, className }) => <h3 id={removeSpace(children)} className={`${title({
    color: 'violet',
    size: 'sm',
    display: 'block'
  })} pb-4 mb-4 text-black-500 pt-[80px] mt-[-88px]${className}`}>{children}</h3>,
  h4: ({ children, className }) => <h4
    className={`!${subtitle({ size: 'lg' })} pb-4 mt-6 mb-4 text-black-500 ${className}`}> {children}</h4 >,
  h5: ({ children, className }) => <h5
    className={`${subtitle({ size: 'md' })} pb-4 mt-6 mb-4 text-black-500 ${className}`}>{children}</h5>,
  h6: ({ children, className }) => <h6
    className={`${subtitle({ size: 'sm' })} pb-4 mt-6 mb-4 text-black-500 ${className}`}>{children}</h6>,
  p: ({ children, className }) => <p
    className={`text-sm lg:text-lg mt-2 mb-1 text-black-500 ${className}`}>{children}</p>,
  ul: ({ children, className }) => <ul
    className={`mt-6 mb-4 space-y-6 lg:space-y-2 border-l border-pink-100 dark:border-pink-800 ${className}`}>{children}</ul>,
  li: ({ children, className }) => <li
    className={`block border-l pl-4 -ml-px border-transparent hover:border-pink-400 dark:hover:border-pink-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 ${className}`}>{children}</li>,
  hr: ({ children, className }) => <hr className={`my-6 ${className}`}>{children}</hr>,
  a: ({ children, className, ...rest }) => <Link {...rest as any}
    className={`text-fuchsia-500 cursor-pointer ${className}`}
    style={{ fontSize: 'inherit' }}
    id={getAnchor(children as any)}>{children}</Link>,
});

export interface IMxdContext {
  platform: [string, (newPlatform: string) => void];
}

export const MdxContext = createContext<IMxdContext>({
  platform: [
    'node', (newPlatform: string) => {
    }
  ],
});

export function Providers({ children }: ProvidersProps) {

  const [platform, setPlatform] = useState(Object.keys(platforms)[0]);
  const components = useMemo(() => getComponents(platform, setPlatform), [platform, setPlatform]);
  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents(components));

  return (
    <NextUIProvider>
      <MdxContext.Provider value={{ platform: [platform, setPlatform] }}>
        <MDXProvider components={componentsWithStyles}>
          {children}
        </MDXProvider>
      </MdxContext.Provider>
    </NextUIProvider>
  );
}

export const useMdxContext = () => useContext(MdxContext);
