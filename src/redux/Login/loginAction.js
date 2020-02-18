import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginConstants'

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest())
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         // response.data is the users
//         const users = response.data
//         dispatch(fetchUsersSuccess(users))
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchUsersFailure(error.message))
//       })
//   }
// }

// export const fetchUsers = () => {
//   return {
//     type: 
//   }
// }


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
