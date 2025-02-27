<template>
  <section>
    <div class="container">
      <h1 class="main-title">Корзина</h1>

      <h2 class="main-title">Список покупок</h2>

      <ul class="mb-10">
        <li v-for="item in items" class="d-flex align-center mb-4">
          <v-img
            class="mr-8"
            max-width="100"
            width="100"
            height="100"
            cover
            :src="item.img"
          ></v-img>
          <h3>{{ item.title }}</h3>
          <v-spacer></v-spacer>
          <p class="mr-4">{{ item.price }}</p>
          <v-btn
            variant="plain"
            icon="mdi-close"
            @click="cartStore.remove(item.id)"
          ></v-btn>
        </li>
      </ul>

      <h2 class="main-title">Итого: {{ totalPrice }}</h2>

      <RButton
        :class="appStore.isMobile ? 'w-100' : ''"
        text="Оформить заказ"
        @click="cartStore.submit()"
      ></RButton>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useCartStore } from '@/store/cart'
import mockItems from '@/data/items'
import RButton from '@/components/RButton.vue'
import { useAppStore } from '@/store/app'

const cartStore = useCartStore()
const appStore = useAppStore()

const allItems = ref([])

const items = computed(() => {
  const array = []

  cartStore.items.forEach((id) => {
    const foundItem = allItems.value.find((item) => item.id === id)
    if (foundItem) {
      array.push(foundItem)
    }
  })

  return array
})

const totalPrice = computed(() => items.value.reduce((acc, curr) => Number(acc) + Number(curr.price), 0))


onMounted(() => {
  allItems.value = mockItems
})
</script>

<style lang="scss" scoped></style>
