import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../actions/UserActions"

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload }
        case USER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case USER_LOADING:
            return { ...state, loading: true }
        default:
            return state;
    }
}