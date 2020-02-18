import {
    SEARCH_PRODUCT,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './searchConstants'

// export function searchProduct (searchData) {

//     return {
//         type: SEARCH_PRODUCT,
//         payload: searchData
//     }

// }

export function searchProduct(searchInput,searchData) {
    console.log("search action", searchInput,searchData)
    // console.log("action", login, password)
    return {
        type: SEARCH_PRODUCT,
        payload: {
            searchInput,
            searchData
        },
    };
}

export const searchSuccess = (searchResponse) => {
    return {
    type: SEARCH_SUCCESS,
    payload: searchResponse
    }
}
export const searchFail = (error) => {
    return {
        type: SEARCH_FAIL,
        payload: error
    }
}

