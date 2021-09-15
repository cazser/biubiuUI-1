import { createApp, defineComponent } from 'vue'

import App from '@/app.vue'
import Icon from '@/icon.vue'
import ButtonGroup from '@/button-group.vue'
import Button from '@/button.vue'
const app = createApp(App)
app.component('biu-icon', Icon)
app.component('biu-button-group', ButtonGroup)
app.mount('#app')

{

    const button = defineComponent(Button, {
        propsData: {
            icon: "left"
        }
    })

    console.log(button.$el)

}