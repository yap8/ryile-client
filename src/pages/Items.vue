<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ route.params.category }}</h1>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
