import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import {getAllCakeReducer, addCakeReducer} from './reducers/cakeReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer,getAllUsersReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrderReducer, allUserOrderReducer } from './reducers/orderReducer'
import {getCakeByIdReducer} from './reducers/cakeReducer' 
import { updateCakeByIdReducer } from './reducers/cakeReducer'


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const rootReducer = combineReducers({
    getAllCakeReducer:getAllCakeReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addCakeReducer:addCakeReducer,
    getCakeByIdReducer :getCakeByIdReducer,
    updateCakeByIdReducer:updateCakeByIdReducer,
    allUserOrderReducer:allUserOrderReducer,
    getAllUsersReducer:getAllUsersReducer,
})

const initialState = {
    cartReducer :{
        cartItems: cartItems
    },
    loginUserReducer : {
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
//console.log(store.getState())
export default store