import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'
import { api } from '@/api'
import { useCategoryStore } from './category'

export const useAppStore = defineStore('app', () => {
  const user = ref(null)

  const { width } = useWindowSize()
  const categoryStore = useCategoryStore()

  const userId = computed(() => user.value?.user_id)

  const isAdmin = computed(() => !!user.value?.is_admin)

  const isMobile = computed(() => width.value <= 1200)

  const init = async () => {
    loadUser()
    categoryStore.load()
  }

  const loadUser = async () => {
    try {
      const token = localStorage.getItem('token') ?? null
  
      if (!token) return
  
      const result = await api.get('/api/users/me')
  
      if (result.data) {
        user.value = result.data
      }
    } catch (error) {
      console.error(error.message)
      user.value = null
    }
  }

  const login = async (email, password) => {
    try {
      const result = await api.post('api/login', {
        email,
        password
      })

      if (result.data) {
        localStorage.setItem('token', result.data)
      }

      init()

      return result.data ?? null
    } catch (error) {
      console.error(error.message)
      return null
    }
  }

  const logout = () => {
    localStorage.removeItem('token')

    user.value = null
  }

  return {
    user,
    userId,
    isAdmin,
    isMobile,
    init,
    loadUser,
    login,
    logout,
  }
})
