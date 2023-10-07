import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getProjects() {
    return axios.get(apis.projects, {
        headers: apiHeader
    })
}

export function getAProject(id) {
    return axios.get(apis.projects + id, {
        headers: apiHeader
    })
}

export function createProject(body) {
    return axios.post(apis.projects, body, {
        headers: apiHeader
    })
}

export function updateProject(body) {
    return axios.put(apis.projects, body, {
        headers: apiHeader
    })
}

export function deleteAProject(id) {
    return axios.delete(apis.projects + id, {
        headers: apiHeader
    })
}
