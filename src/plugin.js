import Toast from '@/toast.vue'
import test from '@/test.vue'
import { defineComponent, createApp } from 'vue'
export default {
    install(app, options) {
        app.config.globalProperties.$toast = function(message) {
            console.log("我是toast")
            let component = defineComponent(test)

            let toast = createApp(component, { message })

            let div = document.createElement('div')
            toast.mount(div);
            document.body.appendChild(div);
        }
    }
}