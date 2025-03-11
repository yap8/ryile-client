<template>
  <section>
    <div class="container">
      <h1 class="main-title">Корзина</h1>

      <!-- <h2 class="main-title">Список покупок</h2> -->

      <ul class="mb-10">
        <li v-for="item in items" class="d-flex align-center mb-4">
          <!-- TODO: remove hardcode server address -->
          <v-img
            class="mr-8"
            max-width="100"
            width="100"
            height="100"
            cover
            :src="`http://192.168.0.102:8000/api/items/${item.item_id}/images`"
          ></v-img>
          <h3>{{ item.title }}</h3>
          <v-spacer></v-spacer>
          <p class="mr-4">Цена: {{ Number(item.price) }} руб</p>
          <v-btn
            variant="plain"
            icon="mdi-close"
            @click="onRemove(item.item_id)"
          ></v-btn>
        </li>
      </ul>

      <h2 class="main-title">Итого: {{ totalPrice }} руб</h2>

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
import RButton from '@/components/RButton.vue'
import { useAppStore } from '@/store/app'
import { api } from '@/api'

const cartStore = useCartStore()
const appStore = useAppStore()

const items = ref([])

const totalPrice = computed(() => items.value.reduce((acc, curr) => Number(acc) + Number(curr.price), 0))

const loadItems = async () => {
  try {
    const result = await api.get('api/items')

    console.log(result.data, cartStore.items)

    items.value = cartStore.items
      .map((itemId) => result.data.find(({ item_id }) => item_id === itemId))
      .filter((item) => item)
  } catch (error) {
    console.error(error.message)
  }
}

const onRemove = (itemId) => {
  cartStore.remove(itemId)
  loadItems()
}

onMounted(() => {
  loadItems()
})
</script>

<style lang="scss" scoped></style>
