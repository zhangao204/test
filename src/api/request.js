import axios from 'axios'
import {getToken} from '@/utils/auth.js'

const baseURL = 'http://121.5.135.130:3023'

const tokenPrefix = 'Bearer '

const instance = axios.create({
    baseURL
})

instance.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers['authorization'] = tokenPrefix + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance