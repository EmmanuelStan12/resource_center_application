import { USERS_SUCCESS, USERS_ERROR, USERS_LOADING } from "../actions/UsersActions"


const initialState = {
    data: null,
    loading: false,
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case USERS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case USERS_LOADING:
            return { ...state, loading: true, error: null }
        default:
            return state;
    }
}