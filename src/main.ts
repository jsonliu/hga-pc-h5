import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import App from './App.vue'

// 引入 Vant
import 'vant/lib/index.css'
import Vant from 'vant'

import TinyVue from '@opentiny/vue'
import { IconCalendar, IconTime } from '@opentiny/vue-icon'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Vant)
app.use(TinyVue)

// 注册图标组件
app.component('IconCalendar', IconCalendar)
app.component('IconTime', IconTime)

app.mount('#app')
