import axios from "axios";
import { baseURL } from "../Common/baseURL";

export let registrationAPI = {
    sendRegistrationaData(name, email, password, passwordConfirmation) {
        axios.post(baseURL + 'register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        })
        .catch(error => console.log(error));
    }
}