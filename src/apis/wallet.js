import axios from "axios";
// import apis, { apiHeader } from "../store/apis";

export function getWallets(address) {
    return axios.get('https://mainnet-explorer-api.decimalchain.com/api/address/' + address)
}

export function getWalletsTxs(address) {
    return axios.get('https://mainnet-explorer-api.decimalchain.com/api/address/' + address + 'txs')
}


