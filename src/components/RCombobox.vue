<template>
  <v-combobox
    v-model="modelValue"
    variant="underlined"
    persistent-placeholder
    return-object
  ></v-combobox>
</template>

<script setup>
const modelValue = defineModel()
</script>

<style lang="scss" scoped></style>
