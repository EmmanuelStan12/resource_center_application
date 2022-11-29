import axios from "axios";

export const CURRICULUM_LOADING = 'LOADING';
export const CURRICULUM_SUCCESS = 'SUCCESS';
export const CURRICULUM_ERROR = 'ERROR'

const URL = 'https://resource-center-application.onrender.com/curriculum'

export const fetchCurriculumLoading = () => {
    return {
        type: CURRICULUM_LOADING
    }
}

export const fetchCurriculumSuccess = (payload) => {
    return {
        type: CURRICULUM_SUCCESS,
        payload
    }
}

export const fetchCurriculumError = (error) => {
    return {
        type: CURRICULUM_ERROR,
        error
    }
}

export const fetchCurriculum = (track, token) => {
    return async (dispatch) => {
        dispatch(fetchCurriculumLoading())
        try {
            const response = await axios.get(`${URL}?track=${track}`, {
                headers: {
                    'Authorization': token
                }
            });
            const data = response.data
            dispatch(fetchCurriculumSuccess(data.payload))
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(fetchCurriculumError(error.response.data))
                if (error.response.data.status === 422) {
                    localStorage.clear()
                }
            } else {
                dispatch(fetchCurriculumError(error.message || error))
            }
        }
    }
}