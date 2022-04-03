import axios from "axios";
import { baseURL } from "../Common/baseURL";

export let registrationAPI = {
    sendRegistrationaData(setIsSuccess) {
        axios.post(baseURL + 'register')
        .then(response => {
            console.log(response.data.status)
            if (response.data.status == 200) {
                setIsSuccess(true)
            }
        }).catch(error => console.log(error));
    }
}