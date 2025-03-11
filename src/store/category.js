import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'

export const useCategoryStore = defineStore('category', () => {
  const items = ref([])

  const load = async () => {
    try {
      const result = await api.get('api/items/categories')

      items.value = result.data ?? []
    } catch (error) {
      console.error(error.message)
      items.value = []
    }
  }

  return {
    items,
    load,
  }
})
