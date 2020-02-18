import {
    all
} from 'redux-saga/effects';

import searchProductSaga from './searchProductSaga';
import loginSaga from './loginSaga'


export default function* rootSaga() {
    yield all([searchProductSaga(),loginSaga()]);
}