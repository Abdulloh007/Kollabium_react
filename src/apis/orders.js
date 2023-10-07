import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getOrders() {
    return axios.get(apis.orders, {
        headers: apiHeader
    })
}

export function getAOrder(id) {
    return axios.get(apis.orders + id, {
        headers: apiHeader
    })
}

export function createOrder(body) {
    return axios.post(apis.orders, body, {
        headers: apiHeader
    })
}

export function updateOrder(body) {
    return axios.put(apis.orders, body, {
        headers: apiHeader
    })
}

export function deleteAOrder(id) {
    return axios.delete(apis.orders + id, {
        headers: apiHeader
    })
}
