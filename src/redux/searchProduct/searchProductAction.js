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
    console.log("searchResponse action", searchResponse)
    return {
    type: SEARCH_SUCCESS,
    payload: {searchResponse}
    }
}
// export function setResponse(response) {
//     return {
//         type: SET_RESPONSE,
//         payload: {
//             response,
//         },
//     };
// }
export const searchFail = (error) => {
    return {
        type: SEARCH_FAIL,
        payload: error
    }
}

