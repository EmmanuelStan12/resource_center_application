import { LOADING, ERROR, SUCCESS } from "../actions/GenericActions"

const initialState = {
    notifications: null,
    loading: false,
    error: null
}

export const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS:
            return { ...state, loading: false, error: null, notifications: action.payload }
        case ERROR:
            return { ...state, loading: false, error: action.error }
        case LOADING:
            return { ...state, loading: true, error: null }
        default:
            return state;
    }
}