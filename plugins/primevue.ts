import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'

import Button from 'primevue/button'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Avatar from 'primevue/avatar'
import Dialog from 'primevue/dialog'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: { preset: Lara },
    ripple: true,
  })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Chip', Chip)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Dialog', Dialog)
})