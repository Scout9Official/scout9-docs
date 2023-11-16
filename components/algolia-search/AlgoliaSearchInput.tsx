'use client'

import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import AlgoliaSearch from './AlgoliaSearchBig';

import React, { useState, useEffect } from 'react'


const AlgoliaSearchInput = () => {

    const [searchShow, setSearchShow] = useState(false)

    useEffect(() => {
        if (searchShow === true) {
            document.body.style.overflow = 'hidden'
        }
        if (searchShow === false) {
            document.body.style.overflow = 'unset'
        }
    }, [searchShow])

    const onClose = (e) => {
        if (e.target.id === 'outer') {
            setSearchShow(false)
        }
    }

    const handleClick = () => {
        setSearchShow(false)
    }



    return (
        <>
            <div onClick={() => setSearchShow(true)}>
                <Input
                    placeholder="Quick Search"
                    endContent={<Kbd>⌘K</Kbd>}
                />
            </div>

            {searchShow && <AlgoliaSearch handleLinkClick={handleClick} onClose={onClose} />}
        </>
    )
}

export default AlgoliaSearchInput