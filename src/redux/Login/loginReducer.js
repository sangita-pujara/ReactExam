import {
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAILURE,
} from './loginConstants'

const initialState = {
    loading: false,
    payload: {},
    error: ''


}

export const loginReducer = (state=initialState,action) => {
    console.log("reducer", state,action);

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                payload: action.payload
            }
            case LOGIN_SUCCESS:
                return {
                    loading: false,
                        payload: action.payload,
                        error: ''
                }
                case LOGIN_FAILURE:
                    console.log("FAIL");
                    return {
                        loading: false,
                           payload: {},
                           error: action.payload
                    }
                    default:
                        return state

    }
}

export default loginReducer

