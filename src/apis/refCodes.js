import axios from "axios";
import apis, { apiHeader } from "../store/apis";

export function getReferralCode(data) {
    return axios.get(apis.getRefCode, {
        headers: apiHeader
    })
}

export function getReferrals(id) {
    return axios.get(apis.referrals + '/' + id + '/history', {
        headers: apiHeader
    })
}


