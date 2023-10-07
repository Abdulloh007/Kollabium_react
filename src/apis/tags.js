import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getTags() {
    return axios.get(apis.tags, {
        headers: apiHeader
    })
}

export function getATag(id) {
    return axios.get(apis.tags + id, {
        headers: apiHeader
    })
}

export function createTag(body) {
    return axios.post(apis.tags, body, {
        headers: apiHeader
    })
}

export function updateTag(body) {
    return axios.put(apis.tags, body, {
        headers: apiHeader
    })
}

export function deleteATag(id) {
    return axios.delete(apis.tags + id, {
        headers: apiHeader
    })
}
