import axios from '@/api/request'

const postList = (filter) => {
    return axios.get('/posts', {
        params: filter
    })
}

const detail = (uuid) => {
    return axios.get('/post/' + uuid)
}

const create = (post) => {
    return axios.post('/post', post)
}

const update = (uuid, post) => {
    return axios.put('/post/' + uuid, post)
}

const remove = (uuid) => {
    return axios.delete('/post/' + uuid)
}

export {
    postList,
    detail,
    create,
    update,
    remove
}