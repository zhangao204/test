import {createApp} from 'vue'
import {Quasar, Notify} from 'quasar'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import {VueMarkdownEditor} from '@/md-editor'

// app
import './assets/main.css'

// v-md-editor
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/theme/style/github.css'

//quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app
    .use(i18n)
    .use(router)
    .use(Quasar, {
        plugins: {
            Notify
        },
        config: {
            notify: {}
        }
    })
    .use(VueMarkdownEditor)
    .mount('#app')
