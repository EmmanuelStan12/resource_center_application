import axios from 'axios'

export const USER_LOADING = "USER_LOADING";
export const USER_ERROR = "USER_ERROR";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT"

const URL = 'http://127.0.0.1:3002/users'

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

export const userLogout = () => {
    return {
        type: USER_LOGOUT
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
            const response = await axios.post(`${URL}/login`, { email: email, password: password });
            const data = response.data
            console.log(data)
            if (response.status !== 200) {
                dispatch(loginUserError(data.error));
            } else {
                localStorage.setItem('user', JSON.stringify(data.payload.user))
                localStorage.setItem('token', JSON.stringify(data.payload.token));
                dispatch(loginUserSuccess(data.payload));
            }
        } catch (error) {
            console.log(error)
            if (error.response.data) {
                dispatch(loginUserError(error.response.data.error))
            } else {
                dispatch(loginUserError(error.message || error))
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
                console.log(response.data)
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