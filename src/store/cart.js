import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const add = (id) => {
    items.push(id)
  }

  return {
    items,
    add,
  }
})
