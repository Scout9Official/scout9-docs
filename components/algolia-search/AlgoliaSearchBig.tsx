'use client'

import dotenv from 'dotenv'
dotenv.config({ path: "../../.env.development" })

import { Kbd } from '@nextui-org/kbd';

import { createPortal } from 'react-dom';
import Link from 'next/link'

import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  useInstantSearch
} from 'react-instantsearch';

const AlgoliaSearch = ({ handleLinkClick, onClose }) => {


  const algoliaKey = process.env.NEXT_PUBLIC_ALGOLIA_KEY
  const algoliaApp = process.env.NEXT_PUBLIC_ALGOLIA_APP

  const searchClient = algoliasearch(algoliaApp, algoliaKey)


  const Hit = ({ hit }) => {
    return (
      <Link href={`#${hit.id}`} className='w-[100%] h-[100%]' onClick={handleLinkClick}>
        <Highlight attribute="name" hit={hit} />
      </Link>)
  }

  function NoResultsBoundary({ children, fallback }) {
    const { results } = useInstantSearch();

    // The `__isArtificial` flag makes sure not to display the No Results message
    // when no hits have been returned.
    if (!results.__isArtificial && results.nbHits === 0) {
      return (
        <>
          {fallback}
          <div hidden>{children}</div>
        </>
      );
    }

    return children;
  }

  function NoResults() {
    const { indexUiState } = useInstantSearch();

    return (
      <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <p className='text-xl'>
          No results for <q>{indexUiState.query}</q>
        </p>
      </div>
    );
  }

  function EmptyQueryBoundary({ children, fallback }) {
    const { indexUiState } = useInstantSearch();

    if (!indexUiState.query) {
      return fallback;
    }

    return children;
  }



  return (createPortal(
    <div className='bg-[rgb(0,0,0,0.4)] backdrop-blur-sm h-full w-full fixed top-0 left-0 z-40 flex justify-center items-center' id='outer' onClick={onClose} >
      <div className='min-w-[45vw] min-h-[30vh] bg-white border-2 border-gray-400 rounded'>
        <InstantSearch searchClient={searchClient} indexName='documentation' >
          <SearchBox placeholder='Search for Concepts' autoFocus={true} />
          <EmptyQueryBoundary fallback={null}>
            <NoResultsBoundary fallback={<NoResults />}>
              <Hits hitComponent={Hit} />
            </NoResultsBoundary>
          </EmptyQueryBoundary>
        </InstantSearch>
      </div>
    </div >, document.body))


}

export default AlgoliaSearch