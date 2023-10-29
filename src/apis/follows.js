import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getFollows() {
    return axios.get(apis.follows, {
        headers: apiHeader
    })
}

export function getMyFollows(query) {
    return axios.get(apis.myFollows + query, {
        headers: apiHeader
    })
}

export function getAFollow(id) {
    return axios.get(apis.follows + id, {
        headers: apiHeader
    })
}

export function createFollow(body) {
    return axios.post(apis.follows, body, {
        headers: apiHeader
    })
}

export function updateFollow(body) {
    return axios.put(apis.follows, body, {
        headers: apiHeader
    })
}

export function deleteAFollow(id) {
    return axios.delete(apis.follows + '/' + id, {
        headers: apiHeader
    })
}
