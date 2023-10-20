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

export function updatePersonalInformationil(body, token) {
    return axios.post(apis.userInfo + '/upsert', body, {
        headers: token ? {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json"
        } : {...apiHeader, "Content-Type": "application/json"}
    })
}

export function getMe(token) {
    return axios.get(apis.me+'?with_user_information=1', {
        headers: token ? {'Authorization': 'Bearer ' + token} : apiHeader
    })
}

export function getMyBalance(wallet) {
    return axios.get('https://mainnet-gate.decimalchain.com/api/address/' + wallet +'/balances',)
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

export function deleteME() {
    return axios.delete(apis.deleteMe, {
        headers: apiHeader
    })
}

export function uploadFile(file) {
    const formData = new FormData()
    formData.append('file', file)
    return axios.post(apis.uploadFile, formData,{
        headers: apiHeader
    })
}
