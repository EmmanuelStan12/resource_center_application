import { GET_INBOX_ERROR, GET_INBOX_LOADING, GET_INBOX_SUCCESS, SEND_INBOX_LOADING, SEND_INBOX_ERROR, SEND_INBOX_SUCCESS } from "../actions/InboxActions"


const initialState = {
    data: null,
    loading: false,
    error: null,
    currentInbox: null
}

export const inboxReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INBOX_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case GET_INBOX_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GET_INBOX_LOADING:
            return { ...state, loading: true, error: null }
        case SEND_INBOX_SUCCESS:
            return { ...state, loading: false, error: null, currentInbox: action.payload }
        case SEND_INBOX_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SEND_INBOX_LOADING:
            return { ...state, loading: true, error: null }
        default:
            return state;
    }
}