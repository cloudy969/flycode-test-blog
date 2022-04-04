import axios from "axios";
import { baseURL } from "../Common/baseURL";


export const authAPI = {

    getToken(email, password) {
        return axios.post(baseURL + 'token', { email, password }).then(response => {
            localStorage.setItem('userToken', response.data.token)
        }).catch(err => console.log(err))
    },

    getCurrentUserData() {
        let token = localStorage.getItem('userToken');
        return axios.get(baseURL + 'user/self', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => localStorage.setItem('currentUser', JSON.stringify(response.data))).catch(err => console.log(err))
    }

}