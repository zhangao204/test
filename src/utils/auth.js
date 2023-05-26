import storage from '@/utils/storage'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'

const setToken = (token) => {
    storage.set(TOKEN_KEY, token)
}

const getToken = () => {
    return storage.get(TOKEN_KEY)
}

const setUserInfo = (user) => {
    storage.set(USER_KEY, JSON.stringify(user))
}

const getUserInfo = () => {
    return JSON.parse(storage.get(USER_KEY))
}

export {
    setToken,
    getToken,
    setUserInfo,
    getUserInfo
}