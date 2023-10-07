import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getPosts() {
    return axios.get(apis.posts + '?with_user_information=1', {
        headers: apiHeader
    })
}

export function getAPost(id) {
    return axios.get(apis.posts + id, {
        headers: apiHeader
    })
}

export function createPost(body) {
    return axios.post(apis.posts, body, {
        headers: apiHeader
    })
}

export function updatePost(body) {
    return axios.put(apis.posts, body, {
        headers: apiHeader
    })
}

export function deleteAPost(id) {
    return axios.delete(apis.posts + id, {
        headers: apiHeader
    })
}
