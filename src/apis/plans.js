import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getPlans() {
    return axios.get(apis.plans, {
        headers: apiHeader
    })
}

export function getAPlan(id) {
    return axios.get(apis.plans  + '/' + id, {
        headers: apiHeader
    })
}

export function createPlan(body) {
    return axios.post(apis.plans, body, {
        headers: apiHeader
    })
}

export function updatePlan(body) {
    return axios.put(apis.plans, body, {
        headers: apiHeader
    })
}

export function deleteAPlan(id) {
    return axios.delete(apis.plans + '/' + id, {
        headers: apiHeader
    })
}
