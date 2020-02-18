import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import logger from 'redux-logger'

import sagas from './../sagas'

import rootReducer from './rootReducer'
import createMiddlewareSaga from 'redux-saga'

const sagaMiddleware = createMiddlewareSaga();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(sagas);

export default store