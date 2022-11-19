export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR'

export const fetchLoading = () => {
    return {
        type: LOADING
    }
}

export const fetchSuccess = (payload) => {
    return {
        type: SUCCESS,
        payload
    }
}

export const fetchError = (error) => {
    return {
        type: ERROR,
        error
    }
}