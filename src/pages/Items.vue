<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { categoriesMap } from '@/constants/categories'

const route = useRoute()

const title = computed(() => categoriesMap[route.params.category])
</script>

<style lang="scss" scoped></style>
