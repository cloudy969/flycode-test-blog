import axios from "axios";
import { baseURL } from "../Common/baseURL";
import { token } from "../Common/token";

export const postsAPI = {

    getPosts(setPosts) {
        axios.get(baseURL + 'post')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(error => console.log(error));
    },

    sendNewPost(newPostText) {
        axios.post(baseURL + 'post', 
        {text: newPostText}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                if (response.status == 200) {
                    console.log(response)
                }
            })
            .catch(error => console.log(error))
    },

    removePost(post) {
        axios.delete(baseURL + `post/${post.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (response.status == 200) {
                console.log(response.status)
            } 
        })
        .catch(error => console.log(error));
    },

    changePost(post, text) {
        axios.patch(baseURL + `post/${post.id}`, {text}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .catch(error => console.log(error))
    }

}