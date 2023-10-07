import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getNews() {
    return axios.get(apis.news, {
        headers: apiHeader
    })
}

export function getANews(id) {
    return axios.get(apis.news + id, {
        headers: apiHeader
    })
}

export function createNews(body) {
    return axios.post(apis.news, body, {
        headers: apiHeader
    })
}

export function updateNews(body) {
    return axios.put(apis.news, body, {
        headers: apiHeader
    })
}

export function deleteANews(id) {
    return axios.delete(apis.news + id, {
        headers: apiHeader
    })
}