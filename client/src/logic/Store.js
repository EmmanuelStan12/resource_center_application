import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/UserReducer";
import { notificationReducer } from "./reducers/NotificationReducer";
import { curriculumReducer } from "./reducers/CurriculumReducer";
import { usersReducer } from "./reducers/UsersReducer";
import {inboxReducer} from './reducers/InboxReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    userReducer,
    notificationReducer,
    curriculumReducer,
    usersReducer,
    inboxReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;