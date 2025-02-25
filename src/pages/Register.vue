<template>
  <section>
    <div class="container">
      <h1 class="main-title">Регистрация</h1>

      <form class="form">
        <v-row>
          <v-col>
            <RInput
              v-model="lastName"
              label="Фамилия"
            ></RInput>
          </v-col>

          <v-col>
            <RInput
              v-model="firstName"
              label="Имя"
            ></RInput>
          </v-col>

          <v-col>
            <RInput
              v-model="patronimyc"
              label="Отчество"
            ></RInput>
          </v-col>
        </v-row>

        <RInput
          v-model="email"
          label="Email"
          type="email"
        ></RInput>

        <RInput
          v-model="password"
          label="Пароль"
          type="password"
        ></RInput>

        <RButton
          text="Зарегистрироваться"
          :disabled="disabled"
          @click="onSubmit"
        ></RButton>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { colors } from '@/constants/colors'
import RInput from '@/components/RInput.vue'
import RButton from '@/components/RButton.vue'

const firstName = ref('')
const lastName = ref('')
const patronimyc = ref('')

const email = ref('')
const password = ref('')

const disabled = computed(() => {
  const values = [
    firstName.value,
    lastName.value,
    email.value,
    password.value,
  ]

  return !values.every((value) => value)
})

const onSubmit = () => {

}
</script>

<style lang="scss" scoped>
.main-title {
  text-align: center;
}

.form {
  max-width: 784px;
  margin: 0 auto;

  :deep(.r-button) {
    display: block;
    width: 100%;
  }
}
</style>
