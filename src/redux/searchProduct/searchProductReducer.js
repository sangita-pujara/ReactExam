import {
    SEARCH_PRODUCT,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './searchConstants'


const initialState = {
    loading: false,
    payload: {},
    error: ''


}

const searchProductReducer=(state=initialState,action)=>{
    console.log("searchProductReducer action",action );
    console.log("searchProductReducer action", action.type);
    

    switch (action.type) {
        case SEARCH_PRODUCT:
         console.log("action", state, action);
            return {
                ...state,
                loading: true,
                payload: action.payload
            }
            case SEARCH_SUCCESS:
                return {
                    loading: false,
                    searchResult: action.payload,
                    error: ''
                }
                case SEARCH_FAIL:
                    console.log("FAIL");
                    return {
                        loading: false,
                            searchResult: [],
                            error: action.payload
                    }
                    default:
                        return state

}
}

export default searchProductReducer