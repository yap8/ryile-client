<template>
  <v-btn
    class="r-button"
    height="44"
    variant="flat"
    :color="colors.black"
    @click="emit('click')"
  ></v-btn>
</template>

<script setup>
import { colors } from '@/constants/colors'

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.r-button {
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 0;

  :deep(.v-btn__content) {
    font-size: 16px;
    text-transform: none;
  }
}
</style>
