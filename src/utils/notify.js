import {Notify} from 'quasar'

const notifySuccess = (message) => {
    Notify.create({
        position: 'top',
        type: 'positive',
        message
    })
}

const notifyFailure = (message) => {
    Notify.create({
        position: 'top',
        type: 'negative',
        message
    })
}

export default {
    notifySuccess,
    notifyFailure
}