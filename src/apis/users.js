import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function authEmail(login, password) {
    return axios.post(apis.auth, { login: login, password: password, device_name: 'browser' }, {
        headers: apiHeader
    })
}

export function registerEmail(body) {
    return axios.post(apis.register, body)
}

export function getMe() {
    return axios.get(apis.me, {
        headers: apiHeader
    })
}

export function getMyTrs() {
    return axios.get(apis.me + '/transactions', {
        headers: apiHeader
    })
}

export function getUser(id) {
    return axios.get(apis.userProf + '/' + id, {
        headers: apiHeader
    })
}

