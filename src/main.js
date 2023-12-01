import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'
import Countdown from 'vue3-flip-countdown'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Countdown)
app.use(VueGtag, {
    appName:'Kebonkross',
    pageTrackerScreenviewEnabled: true,
    config: {
        id: 'G-8D69RHQSVV'
    }
})
app.mount('#app')
