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
      '1.jpg',
      '2.png',
      '3.jpg',
    ],
  },
  {
    to: '/items/clothes',
    name: 'Одежда',
    images: [
      '4.jpg',
      '5.jpg',
      '6.jpg',
    ],
  },
  {
    to: '/items/jewelry',
    name: 'Украшения',
    images: [
      '12.jpg',
      '13.jpg',
      '14.jpg',
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
