<template>
  <section>
    <div class="container">
      <h1 class="main-title">Личный кабинет</h1>

      <form>
        <v-row>
          <v-col v-if="!appStore.isMobile">
            <h2>Данные аккаунта</h2>
          </v-col>

          <v-col>
            <h2 v-if="appStore.isMobile" class="mb-4">Данные аккаунта</h2>

            <v-row>
              <v-col>
                <RInput
                  v-model="user.lastName"
                  label="Фамилия"
                ></RInput>

                <RInput
                  v-model="user.firstName"
                  label="Имя"
                ></RInput>

                <RInput
                  v-model="user.patronymic"
                  label="Отчество"
                ></RInput>
              </v-col>

              <v-col>
                <RInput
                  v-model="user.email"
                  label="Email"
                ></RInput>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex justify-center">
            <RButton
              :class="appStore.isMobile ? 'w-100 mb-4' : 'mb-4'"
              text="Изменить"
              @click="onSave"
            ></RButton>
          </v-col>
        </v-row>
      </form>

      <!-- <RouterLink to="/history" :style="{ color: colors.black }">Мои заказы</RouterLink> -->

      <button :style="{ color: colors.error }" @click="onLogout">Выйти из аккаунта</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { colors } from '@/constants/colors'
import RInput from '@/components/RInput.vue'
import RButton from '@/components/RButton.vue'
import { useAppStore } from '@/store/app'
import { api } from '@/api'

const router = useRouter()

const appStore = useAppStore()

const user = ref({})

const onSave = async () => {
  try {
    await api.patch(`api/users/${appStore.user.user_id}`, {
      first_name: user.value.firstName,
      last_name: user.value.lastName,
      patronymic: user.value.patronymic,
      email: user.value.email,
    })

    await appStore.loadUser()

    alert('Данные обновлены!')
  } catch (error) {
    console.error(error.message)
    alert('Ошибка!')
  }
}

const onLogout = () => {
  appStore.logout()

  router.push('/login')
}

onMounted(async () => {
  await appStore.loadUser()

  user.value = {
    firstName: appStore.user.first_name,
    lastName: appStore.user.last_name,
    patronymic: appStore.user.patronymic,
    email: appStore.user.email,
  }
})
</script>

<style lang="scss" scoped></style>
