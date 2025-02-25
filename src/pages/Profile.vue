<template>
  <section>
    <div class="container">
      <h1 class="main-title">Личный кабинет</h1>

      <form>
        <v-row>
          <v-col>
            <h2>Данные аккаунта</h2>
          </v-col>

          <v-col>
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
                  v-model="user.patronimyc"
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
              text="Изменить"
              @click="onSave"
            ></RButton>
          </v-col>
        </v-row>
      </form>

      <!-- <RouterLink to="/history" :style="{ color: colors.black }">Мои заказы</RouterLink> -->

      <button :style="{ color: colors.error }">Выйти из аккаунта</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { colors } from '@/constants/colors'
import RInput from '@/components/RInput.vue'
import RButton from '@/components/RButton.vue'

const user = ref({
  firstName: 'Test',
  lastName: 'Testov',
  patronimyc: 'Testovich',
  email: 'test@test.ru',
})

const onSave = () => {
  console.log('SAVE')
}
</script>

<style lang="scss" scoped></style>
