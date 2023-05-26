import VueMarkdownEditor from '@kangc/v-md-editor'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'

import Prism from 'prismjs'

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
})

export {
    VueMarkdownEditor
}
