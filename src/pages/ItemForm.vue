<template>
  <section>
    <div class="container">
      <h1 class="main-title">{{ route.params.id ? item.title : 'Добавление товара' }}</h1>

      <form>
        <v-row v-if="appStore.isMobile">
          <v-col>
            <v-img
              v-if="imagePreview"
              style="max-height: 400px;"
              :src="imagePreview"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <RInput
              v-model="item.name"
              label="Название"
            ></RInput>

            <RInput
              v-model="item.price"
              label="Цена"
            ></RInput>

            <RCombobox
              v-model="item.category"
              label="Категория"
              item-title="name_ru"
              :items="categoryStore.items"
            ></RCombobox>

            <RInput
              v-model="item.info"
              label="Дополнительная информация"
            ></RInput>

            <div
              v-if="appStore.isMobile && !imagePreview"
              :style="{ color: colors.error }"
            >Загрузите фото товара</div>

            <v-file-input
              v-model="image"
              label="Фото товара"
              class="mb-8"
              prepend-icon="mdi-camera"
              hide-input
              variant="underlined"
            ></v-file-input>
          </v-col>

          <v-col v-if="!appStore.isMobile">
            <v-img
              v-if="imagePreview"
              style="max-height: 600px;"
              :src="imagePreview"
            ></v-img>

            <div v-else :style="{ color: colors.error }">Загрузите фото товара</div>
          </v-col>
        </v-row>
      </form>

      <RButton
        text="Сохранить"
        :class="appStore.isMobile ? 'w-100' : ''"
        :disabled="disabled"
        @click="onSave"
      ></RButton>
    </div>
  </section>
</template>

<script setup>
import RButton from '@/components/RButton.vue'
import RInput from '@/components/RInput.vue'
import RCombobox from '@/components/RCombobox.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch, computed } from 'vue'
import { colors } from '@/constants/colors'
import { api } from '@/api'
import { useAppStore } from '@/store/app'
import { useCategoryStore } from '@/store/category'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const categoryStore = useCategoryStore()

const item = ref({
  category: null
})

const image = ref(null)
const imagePreview = ref(null)

watch(image, () => {
  if (!image.value) {
    return imagePreview.value = null
  }

  const reader = new FileReader()

  reader.onload = (e) => {
    imagePreview.value = e.target.result
  }

  reader.readAsDataURL(image.value)
})

const disabled = computed(() => {
  const fields = [
    item.value.name,
    item.value.price,
    item.value.info,
    item.value.category,
    image.value,
  ]

  return !fields.every((value) => value)
})

const setItemImage = async (id) => {
  try {
    const formData = new FormData()

    formData.append('image', image.value, image.value.name)

    api.post(`/api/items/${id}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

const onSave = async () => {
  try {
    const result = await api[item.value.item_id ? 'patch' : 'post'](item.value.item_id ? `api/items/${item.value.item_id}` : 'api/items', {
      "name": item.value.name,
      "info": item.value.info,
      "price": item.value.price,
      "category_id": item.value.category.category_id
    })

    setItemImage(result.data.item_id)

    router.push(`/items/${item.value.category.name_en}`)
  } catch (error) {
    console.error(error.message)
    alert('Ошибка!')
  }
}

const load = async () => {
  try {
    const result = await api.get(`api/items/${route.params.id}`)

    item.value = {
      ...result.data,
      price: Number(result.data.price)
    }
  } catch (error) {
    console.error(error.message)
    alert('Ошибка!')
  }

  try {
    const resultImage = await api.get(`api/items/${route.params.id}/images`, {
      responseType: 'blob',
      withCredentials: false
    })

    image.value = resultImage.data
  } catch (error) {
    console.error(error.message)
  }
}

watch(
  () => route.params.id,
  () => route.params.id ? load() : item.value = {},
  { immediate: true },
)
</script>

<style lang="scss" scoped></style>
