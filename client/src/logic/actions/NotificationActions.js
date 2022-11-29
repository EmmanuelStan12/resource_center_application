import axios from 'axios'
import { fetchError, fetchLoading } from './GenericActions'

const URL = 'https://resource-center-application.onrender.com/notifications'

export const getNotifications = () => {
    return async (dispatch) => {
        dispatch(fetchLoading())
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const response = await axios.get(`${URL}`, {
                headers: {
                    'Authorization': token.token
                }
            });
            const data = response.data
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error.response.data.status)
                if (error.response.data.status === 422) {
                    localStorage.clear()
                }
            } else {
                dispatch(fetchError(error.message || error))
            }
        }
    }
}