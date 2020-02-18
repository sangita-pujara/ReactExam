import {
    combineReducers
} from 'redux'
import searchProductReducer from '../redux/searchProduct/searchProductReducer'
import loginReducer from './Login/loginReducer'


const rootReducer = combineReducers({
    searchProduct: searchProductReducer,
    login:loginReducer   
})

export default rootReducer