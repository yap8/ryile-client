<template>
  <RouterLink to="/" class="logo" :style="{ color: colors.black }">
    <v-img
      class="logo__icon"
      :style="`width: ${size}px; max-width: ${size}px; height: ${size}px;`"
      :src="logoSVG"
    ></v-img>
    <h1 :style="`font-family: serif; font-size: ${size}px`">Ryile</h1>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '@/constants/colors'
import logoSVG from '@/assets/logo.svg'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const size = computed(() => appStore.isMobile ? 45 : 90)
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__text {
    font-size: 90px;
    font-family: serif;
  }
}
</style>
