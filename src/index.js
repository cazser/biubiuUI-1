import { createApp } from 'vue'

import App from '@/app.vue'
import Icon from '@/icon.vue'

const app = createApp(App)
app.component('biu-icon', Icon)

app.mount('#app')