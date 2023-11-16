require('dotenv').config({ path: "../../.env.development" })
const algoliasearch = require('algoliasearch');
const data = require('./documentation.json')


const addToIndex = async () => {
    const algoliaApp = process.env.NEXT_PUBLIC_ALGOLIA_APP
    const algoliaAdminKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMINKEY
    const client = algoliasearch(algoliaApp, algoliaAdminKey)
    const index = client.initIndex('documentation')
    try {
        await index.saveObjects(data)
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

addToIndex()