import { createApp, defineComponent } from 'vue'
import App from '@/app.vue'
import Icon from '@/icon.vue'
import ButtonGroup from '@/button-group.vue'
import Button from '@/button.vue'
import Input from '@/input.vue'
import plugin from '@/plugin.js'
import Tabs from '@/tabs.vue'
import TabsPane from '@/tabs-pane.vue'
import TabsItem from '@/tabs-item.vue'
import TabsHead from '@/tabs-head.vue'
import TabsBody from '@/tabs-body.vue'
const app = createApp(App)
app.component('biu-icon', Icon)
app.component('biu-button-group', ButtonGroup)
app.component('biu-input', Input)
app.component('biu-tabs', Tabs)
app.component('biu-tabs-head', TabsHead)
app.component('biu-tabs-body', TabsBody)
app.component('biu-tabs-Pane', TabsPane)
app.component('biu-tabs-item', TabsItem)
app.use(plugin)
app.mount('#app')