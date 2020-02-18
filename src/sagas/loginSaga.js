import {
    put,
    call,
    takeEvery,
    select,
    take
} from 'redux-saga/effects'
import Axios from 'axios';

import {
    loginSuccess,
   
} from './../redux/Login/loginAction'
import LoginApi from '../redux/Login/LoginApi'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

// const getLogin = () => {
//     // return Axios.post("http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?query=bike");
//     console.log("saga");
// }

function* handleLogin(prop) {
    console.log("saga =>>>>", prop.payload.login)
    try {
        const login = yield call(LoginApi, prop.payload.login, prop.payload.password);
        console.log("login saga", login);
        
        yield put(loginSuccess(login))


    } catch (error) {
        console.log("ERROR", error);       
        // yield put(loginFail(error))

    }
    console.log("saga");

}
export default function* watchLogin() {
    console.log()
    yield takeEvery(LOGIN_REQUEST, handleLogin);
}