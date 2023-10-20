import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getLikes() {
    return axios.get(apis.likes, {
        headers: apiHeader
    })
}

export function getALike(id) {
    return axios.get(apis.likes + id, {
        headers: apiHeader
    })
}

export function createLike(body) {
    return axios.post(apis.likes, body, {
        headers: apiHeader
    })
}

export function updateLike(body) {
    return axios.put(apis.likes, body, {
        headers: apiHeader
    })
}

export function deleteALike(id) {
    return axios.delete(apis.likes + '/' + id, {
        headers: apiHeader
    })
}
