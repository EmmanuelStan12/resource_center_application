import axios from 'axios'

export const USERS_LOADING = "USERS_LOADING";
export const USERS_ERROR = "USERS_ERROR";
export const USERS_SUCCESS = "USERS_SUCCESS";

const URL = 'https://resource-center-application.onrender.com/users'

export const getUsersError = (error) => {
    return {
        type: USERS_ERROR,
        payload: error
    }
}

export const getUsersSuccess = (payload) => {
    return {
        type: USERS_SUCCESS,
        payload
    }
}

export const getUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}

export const getUsers = (query, token) => {
    return async (dispatch) => {
        dispatch(getUsersLoading())
        try {
            const response = await axios.get(`${URL}/get?track=${query}`, { 
                headers: { 'Authorization': token } 
            });
            const data = response.data
            if (response.status !== 200) {
                dispatch(getUsersError(data.error));
            } else {
                dispatch(getUsersSuccess(data.payload));
            }
        } catch (error) {
            if (error.response.data) {
                dispatch(getUsersError(error.response.data.error))
            } else {
                dispatch(getUsersError(error.message || error))
            }
        }
    }
}