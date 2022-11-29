import axios from 'axios'

export const SEND_INBOX_LOADING = "SEND_INBOX_LOADING";
export const SEND_INBOX_ERROR = "SEND_INBOX_ERROR";
export const SEND_INBOX_SUCCESS = "SEND_INBOX_SUCCESS";

export const GET_INBOX_LOADING = "GET_INBOX_LOADING";
export const GET_INBOX_ERROR = "GET_INBOX_ERROR";
export const GET_INBOX_SUCCESS = "GET_INBOX_SUCCESS";

const URL = 'https://resource-center-application.onrender.com/inbox'

export const sendInboxError = (error) => {
    return {
        type: SEND_INBOX_ERROR,
        payload: error
    }
}

export const sendInboxSuccess = (payload) => {
    return {
        type: SEND_INBOX_SUCCESS,
        payload
    }
}

export const sendInboxLoading = () => {
    return {
        type: SEND_INBOX_LOADING
    }
}

export const getInboxError = (error) => {
    return {
        type: GET_INBOX_ERROR,
        payload: error
    }
}

export const getInboxSuccess = (payload) => {
    return {
        type: GET_INBOX_SUCCESS,
        payload
    }
}

export const getInboxLoading = () => {
    return {
        type: GET_INBOX_LOADING
    }
}

export const sendInbox = (inbox, token) => {
    return async (dispatch) => {
        dispatch(sendInboxLoading())
        try {
            const response = await axios.post(`${URL}`, { ...inbox }, { 
                headers: { 'Authorization': token } 
            });
            const data = response.data
            if (response.status !== 201) {
                dispatch(sendInboxError(data.error));
            } else {
                dispatch(sendInboxSuccess(data.payload));
            }
        } catch (error) {
            if (error.response.data) {
                dispatch(sendInboxError(error.response.data.error))
            } else {
                dispatch(sendInboxError(error.message || error))
            }
        }
    }
}

export const getInbox = (token, route) => {
    return async (dispatch) => {
        dispatch(getInboxLoading())
        try {
            const response = await axios.get(`${URL}?q=${route}`, { 
                headers: { 'Authorization': token } 
            });
            const data = response.data
            if (response.status !== 200) {
                dispatch(getInboxError(data.error));
            } else {
                dispatch(getInboxSuccess(data.payload));
            }
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                dispatch(getInboxError(error.response.data.error))
            } else {
                dispatch(getInboxError(error.message || error))
            }
        }
    }
}