import axios from "axios";
import { baseURL } from "../Common/baseURL";
import { token } from "../Common/token";


export const authAPI = {

    getToken(email, password) {
        return axios.post(baseURL + 'token', { email, password }).then(response => {
            localStorage.setItem('userToken', response.data.token)
        }).catch(err => console.log(err))
    },

    getCurrentUserData() {
        return axios.get(baseURL + 'user/self', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => localStorage.setItem('currentUser', JSON.stringify(response.data))).catch(err => console.log(err))
    }

}