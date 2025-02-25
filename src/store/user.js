import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    id: 1,
    isAdmin: false,
  })

  const userId = computed(() => user.value.id)

  const isAdmin = computed(() => user.value.isAdmin)

  return {
    user,
    userId,
    isAdmin,
  }
})
