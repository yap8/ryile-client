<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>

      <ul class="items">
        <li v-for="item in items[route.params.category]" class="item">
          <v-img class="item__img" :src="item.img" cover></v-img>

          <h3 class="item__title">{{ item.title }}</h3>

          <v-row>
            <v-col>
              {{ item.price }}
            </v-col>

            <v-col class="d-flex justify-end">
              <RButton
                text="Добавить в корзину"
                @click="cartStore.add(item.id)"
              ></RButton>
            </v-col>
          </v-row>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { categoriesMap } from '@/constants/categories'
import { useCartStore } from '@/store/cart'
import RButton from '@/components/RButton.vue'
import mockItems from '@/data/items'

const cartStore = useCartStore()

const route = useRoute()

const items = mockItems

const title = computed(() => categoriesMap[route.params.category])
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  max-width: 650px;
  width: 48%;
  margin-bottom: 30px;

  &__img {
    height: 750px;
    margin-bottom: 10px;
  }

  &__title {
    text-align: center;
    margin-bottom: 10px;
  }
}

@media (max-width: 1200px) {
  .item {
    width: 100%;
    max-width: 100%;
  }
}
</style>
