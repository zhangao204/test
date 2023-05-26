import axios from '@/api/request'

const commentList = (filter) => {
    return axios.get('/comments', {
        params: filter
    })
}

const create = (comment) => {
    return axios.post('/comment', comment)
}

export {
    commentList,
    create
}

