import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../actions/UserActions"

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case USER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case USER_LOADING:
            return { ...state, loading: true, error: null }
        default:
            return state;
    }
}