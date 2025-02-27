import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('cartItems') ?? '[]'))

  const add = (id) => {
    items.value.push(id)
  }

  const remove = (id) => {
    const index = items.value.findIndex((item) => item === id)

    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  const submit = () => {
    items.value = []

    alert('Заказ оформлен')
  }

  watch(items, () => {
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }, {
    deep: true,
  })

  return {
    items,
    add,
    remove,
    submit,
  }
})
