import axios from "axios"
import { getToken, removeToken } from "./Token"
import router from "../Router/Router"

const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})



request.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    console.dir(error)
    if(error.response.status === 401){
        removeToken()
        router.navigate('/upload')
        
    }
    return Promise.reject(error)
})

export { request }