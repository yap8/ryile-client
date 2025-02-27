<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ route.params.id ? item.title : 'Добавление товара' }}</h1>

      <form>
        <v-row v-if="appStore.isMobile">
          <v-col>
            <v-img
              v-if="item.photo"
            ></v-img>

            <div v-else :style="{ color: colors.error }">Загрузите фото товара</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <RInput
              v-model="item.title"
              label="Название"
            ></RInput>

            <RInput
              v-model="item.price"
              label="Цена"
            ></RInput>

            <RInput
              v-model="item.info"
              label="Дополнительная информация"
            ></RInput>

            <v-file-input
              v-model="item.photo"
              label="Фото товара"
              prepend-icon="mdi-camera"
              single-line
              variant="plain"
            ></v-file-input>
          </v-col>

          <v-col v-if="!appStore.isMobile">
            <v-img
              v-if="item.photo"
            ></v-img>

            <div v-else :style="{ color: colors.error }">Загрузите фото товара</div>
          </v-col>
        </v-row>
      </form>

      <RButton
        text="Сохранить"
        :disabled="disabled"
        @click="save"
      ></RButton>
    </div>
  </section>
</template>

<script setup>
import RButton from '@/components/RButton.vue'
import RInput from '@/components/RInput.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted, watch, computed } from 'vue'
import mockItems from '@/data/items'
import { useAppStore } from '@/store/app'
import { colors } from '@/constants/colors'

const route = useRoute()

const appStore = useAppStore()

const item = ref({})

const disabled = computed(() => {
  const fields = [
    item.value.title,
    item.value.price,
    item.value.photo,
  ]

  return !fields.every((value) => value)
})

const save = () => {
  console.log(item.value)
}

watch(() => route.params.id, () => {
  item.value = mockItems.find((item) => item.id == route.params.id) ?? {}
  console.log(item.value)
}, {
  immediate: true,
})
</script>

<style lang="scss" scoped></style>
