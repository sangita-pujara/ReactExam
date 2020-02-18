import {
    put,
    call,
    takeEvery,
    select,
    take
} from 'redux-saga/effects'
import Axios from 'axios';
import {
    SEARCH_PRODUCT,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './../redux/searchProduct/searchConstants'
import {
    searchSuccess, searchFail
} from './../redux/searchProduct/searchProductAction'


   const searchApi = (search) => {
       console.log("searchApi", search)
       const searchTerm = search.payload.searchTerm;
       const searchData = search.payload.searchData;
       console.log();
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
           return Axios.get(searchGetURL, options).then(res => console.log(res));
       }
   }

function* handleImagesLoad(prop) {
    try {
        const images = yield call(searchApi, prop);
        console.log("images saga", images);
       // yield put(searchSuccess(images))


    } catch (error) {
        console.log("ERROR", error);
        // const error1 = yield take(fetchUsersFailure);
        //const error1 =yield call(fetchUsersFailure, error)
        // console.log("error", error1);
        yield put(searchFail(error))

    }
    console.log("saga");

}
export default function* watchImagesLoad() {
    yield takeEvery(SEARCH_PRODUCT, handleImagesLoad);
}