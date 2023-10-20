import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getComments(data) {
    return axios.get(apis.comments + data, {
        headers: apiHeader
    })
}

export function getAComment(id) {
    return axios.get(apis.comments + id, {
        headers: apiHeader
    })
}

export function createComment(body) {
    return axios.post(apis.comments, body, {
        headers: apiHeader
    })
}

export function updateComment(id, body) {
    return axios.put(apis.comments + '/' + id, body, {
        headers: apiHeader
    })
}

export function deleteAComment(id) {
    return axios.delete(apis.comments + '/' + id, {
        headers: apiHeader
    })
}
