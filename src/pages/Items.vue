<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>

      <ul class="items">
        <li v-for="item in items" class="item">
          <!-- TODO: remove hardcode server address -->
          <v-img class="item__img" :src="`http://192.168.0.102:8000/api/items/${item.item_id}/images`" cover></v-img>

          <h3 class="item__title">{{ item.name }}</h3>

          <v-row>
            <v-col>
              {{ Number(item.price) }} рублей
            </v-col>

            <v-col class="d-flex justify-end">
              <RButton
                v-if="appStore.isAdmin"
                class="mr-4"
                text="Удалить"
                @click="deleteItem(item.item_id)"
              ></RButton>

              <RButton
                v-if="appStore.isAdmin"
                text="Редактировать"
                @click="router.push(`/item/${item.item_id}`)"
              ></RButton>

              <RButton
                v-else
                text="Добавить в корзину"
                @click="cartStore.add(item.item_id)"
              ></RButton>
            </v-col>
          </v-row>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { categoriesMap } from '@/constants/categories'
import RButton from '@/components/RButton.vue'
import mockItems from '@/data/items'
import { useCartStore } from '@/store/cart'
import { useAppStore } from '@/store/app'
import { api } from '@/api/index'

const cartStore = useCartStore()
const appStore = useAppStore()

const route = useRoute()
const router = useRouter()

const items = ref([])

const title = computed(() => categoriesMap[route.params.category])

const deleteItem = async (id) => {
  try {
    const res = await api.delete(`api/items/${id}`)

    loadItems()
  } catch (error) {
    console.error(error.message)
  }
}

const loadItems = async () => {
  try {
    const { data } = await api.get(`/api/items`)

    items.value = data.filter((item) => item.category.name_en === route.params.category)
  } catch (error) {
    console.error(error.message)
  }
}

watch(() => route.params.category, () => {
  loadItems()
}, {
  immediate: true,
})
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

    &__img {
      height: 350px;
    }
  }
}
</style>
