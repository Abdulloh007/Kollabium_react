import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getFavorites() {
    return axios.get(apis.favorites, {
        headers: apiHeader
    })
}

export function getAFavorite(id) {
    return axios.get(apis.favorites + id, {
        headers: apiHeader
    })
}

export function createFavorite(body) {
    return axios.post(apis.favorites, body, {
        headers: apiHeader
    })
}

export function updateFavorite(body) {
    return axios.put(apis.favorites, body, {
        headers: apiHeader
    })
}

export function deleteAFavorite(id) {
    return axios.delete(apis.favorites + id, {
        headers: apiHeader
    })
}
