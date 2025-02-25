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

const cartStore = useCartStore()

const route = useRoute()

const items = {
  clothes: [
    {
      id: 1,
      title: 'Одежда 1',
      img: '/1.jpg',
      price: '10000 руб',
    },
    {
      id: 2,
      title: 'Одежда 2',
      img: '/3.jpg',
      price: '20000 руб',
    },
    {
      id: 3,
      title: 'Одежда 3',
      img: '/4.jpg',
      price: '10000 руб',
    },
  ],
  jewelry: [
    {
      id: 4,
      title: 'Украшение 1',
      img: '/13.jpg',
      price: '100000000 руб',
    },
    {
      id: 5,
      title: 'Украшение 2',
      img: '/e.png',
      price: '1 руб',
    },
  ],
  new: [
    {
      id: 6,
      title: 'Новинка 1',
      img: '/9.jpg',
      price: '100 руб'
    }
  ],
}

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
</style>
