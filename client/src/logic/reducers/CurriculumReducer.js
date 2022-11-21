import { CURRICULUM_ERROR, CURRICULUM_LOADING, CURRICULUM_SUCCESS } from "../actions/CurriculumActions"

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const curriculumReducer = (state = initialState, action) => {
    switch(action.type) {
        case CURRICULUM_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case CURRICULUM_ERROR:
            return { ...state, loading: false, error: action.error }
        case CURRICULUM_LOADING:
            return { ...state, loading: true, error: null }
        default:
            return state;
    }
}