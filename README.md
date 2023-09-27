# Scout9 Docs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# For Connor

## Architecture Overview
* [NextJS](https://nextjs.org/): Web Framework, React + Server Side Rendering (SSR)
* [TailwindCSS](https://tailwindcss.com): CSS Framework
* [NextUI](https://nextui.org/): Next.js UI component library (includes SSR components that be used on the server)
* [MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx): Markdown + JSX, a way to load documentation pages from markdown files
* [Algolia](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/): Search Engine (for documentation search)

## Tasks
* [ ] Improve documentation style, see `./app/providers` `getComponents` to see how styles are being rendered with MDX. Use [this](https://platform.openai.com/docs/guides/speech-to-text/quickstart) as a style guide.
* [ ] Add search to documentation, use Algolia to index documentation pages and add a search bar to the documentation page. Use [this](https://platform.openai.com/docs/guides/speech-to-text/quickstart) as a reference.

