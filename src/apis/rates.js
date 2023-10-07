import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getRates() {
    return axios.get(apis.rates, {
        headers: apiHeader
    })
}

export function getARate(id) {
    return axios.get(apis.rates + id, {
        headers: apiHeader
    })
}

export function createRate(body) {
    return axios.post(apis.rates, body, {
        headers: apiHeader
    })
}

export function updateRate(body) {
    return axios.put(apis.rates, body, {
        headers: apiHeader
    })
}

export function deleteARate(id) {
    return axios.delete(apis.rates + id, {
        headers: apiHeader
    })
}
