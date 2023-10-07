import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getCompanies() {
    return axios.get(apis.companies, {
        headers: apiHeader
    })
}

export function getACompany(id) {
    return axios.get(apis.companies + id, {
        headers: apiHeader
    })
}

export function createCompany(body) {
    return axios.post(apis.companies, body, {
        headers: apiHeader
    })
}

export function updateCompany(body) {
    return axios.put(apis.companies, body, {
        headers: apiHeader
    })
}

export function deleteACompany(id) {
    return axios.delete(apis.companies + id, {
        headers: apiHeader
    })
}
