import axios from 'axios'

export const USERS_LOADING = "USERS_LOADING";
export const USERS_ERROR = "USERS_ERROR";
export const USERS_SUCCESS = "USERS_SUCCESS";

const URL = 'http://127.0.0.1:3002/users'

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
            const response = await axios.get(`${URL}/get?${query}`, { 
                headers: { 'Authorization': token } 
            });
            const data = response.data
            console.log(data)
            if (response.status !== 200) {
                dispatch(getUsersError(data.error));
            } else {
                dispatch(getUsersSuccess(data.payload));
            }
        } catch (error) {
            console.log(error)
            if (error.response.data) {
                dispatch(getUsersError(error.response.data.error))
            } else {
                dispatch(getUsersError(error.message || error))
            }
        }
    }
}

export const registerUser = (info) => {
    return async (dispatch) => {
        dispatch(loginUserLoading())
        try {
            const response = await axios.post(`${URL}/register`, { ...info });
            const data = response.data
            if (response.status !== 201) {
                dispatch(loginUserError(data.error));
            } else {
                localStorage.setItem('user', JSON.stringify(data.payload.user))
                localStorage.setItem('token', JSON.stringify(data.payload.token));
                dispatch(loginUserSuccess(data.payload));
            }
        } catch (error) {
            if (error.response.data) {
                dispatch(loginUserError(error.response.data.error))
            } else {
                dispatch(loginUserError(error.message || error))
            }
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        dispatch(loginUserLoading())
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                dispatch(loginUserError('Invalid Token'));
                return;
            }
            const response = await axios.get(`${URL}/validate`, {
                headers: {
                    'Authorization': JSON.parse(token).token
                }
            });
            const data = response.data;
            if (response.status !== 200) {
                dispatch(loginUserError(data.error));
                localStorage.clear()
            } else {
                data.payload.token = JSON.parse(token);
                dispatch(loginUserSuccess(data.payload));
            }
        } catch (error) {
            if (error.response.data) {
                dispatch(loginUserError(error.response.data.error))
            } else {
                dispatch(loginUserError(error.message || error))
            }
        }
    }
}