import Axios from 'axios'
const searchApi = (searchTerm, searchData) => {
     const options = {
         headers: {
                     'Bepsy-SiteId': 'siteUS',
                     'Bepsy-CatalogId': 'cloudCatalog',
                     'Bepsy-PricelistId': 'defaultPriceGroup',
                     'content-type': 'application/json'
         },
     };


    if (searchTerm !== null && searchTerm !== '') {
        let searchGetURL = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?`;
        if (searchTerm.includes('term')) {
            const newTerm = decodeURI(searchTerm);
            searchGetURL = `${searchGetURL}query=${encodeURI(newTerm)}`;
        } else {
            const searchQuery = {
                term: searchTerm,
            };
            searchGetURL = `${searchGetURL}query=${encodeURI(
        JSON.stringify(searchQuery)
      )}`;
        }
        return Axios.get(searchGetURL, options);
    }
}
export default searchApi