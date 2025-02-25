import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './routes'
import './styles/main.scss'
import { colors } from './constants/colors';

const light = {
  dark: false,
  colors,
}

const vuetify = createVuetify({
  locale: {
    locale: 'ru',
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      ripple: false,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
    },
  },
})

const app = createApp(App)

app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
