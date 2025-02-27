import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const { width } = useWindowSize()

  console.log(width)

  const isMobile = computed(() => width.value <= 1200)

  return {
    isMobile,
  }
})
