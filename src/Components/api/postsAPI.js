import axios from "axios";
import { baseURL } from "../Common/baseURL";

export const postsAPI = {

    getPosts(setPosts) {
        axios.get(baseURL + 'post')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(error => console.log(error));
    },

    sendNewPost(newPostText, setIsAdded) {
        let token = localStorage.getItem('userToken');
        axios.post(baseURL + 'post', 
        {text: newPostText}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(() => setIsAdded(true))
            .catch(error => console.log(error))
    },

    removePost(post, setIsUpdate) {
        let token = localStorage.getItem('userToken');
        axios.delete(baseURL + `post/${post.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => setIsUpdate(true))
        .catch(error => console.log(error));
    },

    changePost(post, text, setIsUpdate) {
        let token = localStorage.getItem('userToken');
        axios.patch(baseURL + `post/${post.id}`, {text}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(() => setIsUpdate(true))
        .catch(error => console.log(error))
    }

}