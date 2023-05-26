import axios from '@/api/request.js'

const login = (info) => {
    return axios.post('/login', info)
}

export {
    login
}