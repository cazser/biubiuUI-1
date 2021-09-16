import Toast from '@/toast.vue'
import { defineComponent, createApp } from 'vue'
export default {
    install(app, options) {
        app.config.globalProperties.$toast = function(message) {
            console.log("我是toast")
            let component = defineComponent(Toast)

            let toast = createApp(component)

            let div = document.createElement('div')
            toast.mount(div);
            document.body.appendChild(div);
        }
    }
}