import axios from 'axios'
import { fetchError, fetchLoading } from './GenericActions'

export const getNotifications = (token) => {
    return async (dispatch) => {
        dispatch(fetchLoading())
        try {
            
        } catch (error) {
            console.log(error)
            if (error.response.data) {
                dispatch(fetchError(error.response.data.error))
            } else {
                dispatch(fetchError(error.message || error))
            }
        }
    }
}