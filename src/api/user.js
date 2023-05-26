import axios from '@/api/request.js'

const getLoginUserInfo = () => {
    return axios.get('/user')
}

const getUserInfoByUUID = (uuid) => {
    return axios.get('/user/' + uuid)
}

export {
    getLoginUserInfo,
    getUserInfoByUUID
}