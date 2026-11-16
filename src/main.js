
import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

import './style.css'

const TerracottaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FDF3ED',
      100: '#F9E3D8',
      200: '#F3C6B1',
      300: '#E8A88D',
      400: '#D98A68',
      500: '#C16A45',
      600: '#A95435',
      700: '#89432E',
      800: '#713A2D',
      900: '#603328',
      950: '#341912'
    }
  }
})

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: TerracottaPreset
  }
})

app.mount('#app')
