import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/UserReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;