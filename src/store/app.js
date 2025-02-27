import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const user = ref({
    id: 1,
    isAdmin: true,
  })

  const { width } = useWindowSize()

  const userId = computed(() => user.value.id)

  const isAdmin = computed(() => user.value.isAdmin)

  const isMobile = computed(() => width.value <= 1200)

  return {
    user,
    userId,
    isAdmin,
    isMobile,
  }
})
