import { createApp, defineComponent } from 'vue'
import App from '@/app.vue'
import Icon from '@/icon.vue'
import ButtonGroup from '@/button-group.vue'
import Button from '@/button.vue'
import Input from '@/input.vue'
import plugin from '@/plugin.js'
import Tabs from '@/tabs.vue'
import TabsPane from '@/tabs-p.vue'
import TabsItem from '@/tabs-item.vue'
import TabsHead from '@/tabs-head.vue'
import TabsBody from '@/tabs-body.vue'
import Collapse from '@/collapse.vue'
import CollapseItem from '@/collapse-item.vue'
import Uploader from '@/Uploader.vue'
import Sticky from '@/sticky.vue'
const app = createApp(App)
app.component('biu-icon', Icon)
app.component('biu-button-group', ButtonGroup)
app.component('biu-input', Input)
app.component('biu-tabs', Tabs)
app.component('biu-tabs-head', TabsHead)
app.component('biu-tabs-body', TabsBody)
app.component('biu-tabs-item', TabsItem)
app.component('biu-collapse', Collapse)
app.component('biu-collapse-item', CollapseItem)
app.component('biu-uploader', Uploader)
app.component('biu-sticky', Sticky)
app.use(plugin)
app.mount('#app')