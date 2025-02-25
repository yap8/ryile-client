import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const routesLoaded = ref(false)

  return {
    routesLoaded
  }
})
