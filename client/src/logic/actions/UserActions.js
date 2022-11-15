import axios from 'axios'

export const USER_LOADING = "USER_LOADING";
export const USER_ERROR = "USER_ERROR";
export const USER_SUCCESS = "USER_SUCCESS";

const URL = '127.0.0.1/users'

export const loginUserError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

export const loginUserSuccess = (payload) => {
    return {
        type: USER_SUCCESS,
        payload
    }
}

export const loginUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch(loginUserLoading())
        try {
            const response = await axios.post(`${URL}/login`, { email, password });
            const data = response.data()
            if (response.status !== 200) {
                dispatch(loginUserError(data.error));
            } else {
                dispatch(loginUserSuccess(data))
            }
        } catch (error) {
            dispatch(loginUserError(error.message))
        }
    }
}

export const registerUser = (info) => {
    return async (dispatch) => {
        dispatch(loginUserLoading())
        try {
            const response = await axios.post(`${URL}/login`, {...info});
            const data = response.data()
            if (response.status !== 201) {
                dispatch(loginUserError(data.error));
            } else {
                dispatch(loginUserSuccess(data))
            }
        } catch (error) {
            dispatch(loginUserError(error.message))
        }
    }
}