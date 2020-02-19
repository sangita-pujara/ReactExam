import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginConstants'


export function loginRequest(login, password) {
    console.log("action", login, password)
    return {
        type: LOGIN_REQUEST,
        payload: {
            login,
            password
        },
    };
}

export const loginSuccess = userDetail => {
    return {
        type: LOGIN_SUCCESS,
        payload: userDetail
    }
}

export const loginFailure = error => {
    console.log("fetchUsersFailure", error);
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}
