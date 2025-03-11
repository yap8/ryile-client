<template>
  <section>
    <img class="image" src="/home.jpg" alt="Home">

    <div class="container">
      <ul class="items">
        <li v-for="item in items" class="item">
          <v-row class="item__images">
            <v-col v-for="image in item.images">
              <v-img :src="image"></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="d-flex justify-center">
              <RButton
                append-icon="mdi-arrow-right"
                :to="item.to"
                :text="item.name"
              ></RButton>
            </v-col>
          </v-row>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import RButton from '@/components/RButton.vue'

const items = [
  {
    to: '/items/new',
    name: 'Новинки',
    images: [
      'categories/new/1.jpg',
      'categories/new/2.jpg',
      'categories/new/3.jpg',
    ],
  },
  {
    to: '/items/clothes',
    name: 'Одежда',
    images: [
      'categories/clothes/1.jpg',
      'categories/clothes/2.jpg',
      'categories/clothes/3.jpg',
    ],
  },
  {
    to: '/items/jewellery',
    name: 'Украшения',
    images: [
      'categories/jewelry/1.jpg',
      'categories/jewelry/2.jpg',
      'categories/jewelry/3.jpg',
    ],
  },
]
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 800px;
  object-fit: cover;
}

.container {
  padding: 128px;
}

.item {
  margin-bottom: 30px;
  &__images {
    margin-bottom: 10px;
  }
}

@media (max-width: 1200px) {
  .image {
    height: 400px;
  }

  .container {
    padding: 0;
  }
}
</style>
