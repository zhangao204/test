import {createI18n} from 'vue-i18n'
import zh from './config/zh.js'
import en from './config/en.js'
import ja from './config/ja.js'

const messages = Object.assign(zh, en, ja)

const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
})

export default i18n