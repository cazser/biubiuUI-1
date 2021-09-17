import Toast from '@/toast.vue'
import test from '@/toast-wrapper.vue'
import { defineComponent, createApp } from 'vue'

function createToast(message, options) {
    let component = defineComponent(test)

    let toast = createApp(component, {
        message,
        ...options
    })

    return toast;

}

function mount(toast) {
    if (!container) {
        container = document.createElement("div");
        document.body.appendChild(container);
    }
    toast.mount(container);
}

function unmount(toast) {
    toast.unmount();

}

let currentToast;
let container;
export default {
    install(app, options) {
        app.config.globalProperties.$toast = function(message, options) {
            if (currentToast) {
                unmount(currentToast);
            }
            currentToast = createToast(message, options);
            mount(currentToast);
        }
    }
}