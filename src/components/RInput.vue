<template>
  <v-text-field
    v-model="modelValue"
    variant="underlined"
    persistent-placeholder
  ></v-text-field>
</template>

<script setup>
const modelValue = defineModel()
</script>

<style lang="scss" scoped></style>
