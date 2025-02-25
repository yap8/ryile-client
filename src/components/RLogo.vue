<template>
  <RouterLink to="/" class="logo" :style="{ color: colors.black }">
    <v-img class="logo__icon" :src="logoSVG"></v-img>
    <h1 class="logo__text">Ryile</h1>
  </RouterLink>
</template>

<script setup>
import { colors } from '@/constants/colors'
import logoSVG from '@/assets/logo.svg'
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__icon {
    width: 90px;
    max-width: 90px;
    max-height: 90px;
  }

  &__text {
    font-size: 90px;
    font-family: serif;
  }
}
</style>
