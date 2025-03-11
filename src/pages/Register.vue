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
              v-model="patronymic"
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
import { useRouter } from 'vue-router'
import RInput from '@/components/RInput.vue'
import RButton from '@/components/RButton.vue'
import { api } from '@/api'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const patronymic = ref('')

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

const onSubmit = async () => {
  try {
    const result = await api.post('api/users', {
      "first_name": firstName.value,
      "last_name": lastName.value,
      "patronymic": patronymic.value,
      "email": email.value,
      "password": password.value,
    })

    if (result?.data) {
      router.push('/login')

      alert('Пользователь создан успешно')
    } else {
      alert('Ошибка!')
    }
  } catch (error) {
    console.error(error.message)
  }
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
