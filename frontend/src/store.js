
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'

import { productListReducer, productDetailsReducer} from './reducers/productReducer'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store