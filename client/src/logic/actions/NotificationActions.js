import axios from 'axios'
import { fetchError, fetchLoading } from './GenericActions'

const URL = 'http://127.0.0.1:3002/notifications'

export const getNotifications = () => {
    return async (dispatch) => {
        dispatch(fetchLoading())
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            console.log(token)
            const response = await axios.get(`${URL}`, {
                headers: {
                    'Authorization': token.token
                }
            });
            const data = response.data
            console.log(data)
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(fetchError(error.response.data))
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