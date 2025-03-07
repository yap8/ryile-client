<template>
  <section>
    <div class="container">
      <h1 class="main-title">Вход</h1>

      <form class="form">
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
          text="Войти"
          :disabled="disabled"
          @click="onSubmit"
        ></RButton>

        <div class="register">
          Нет аккаунта?

          <RouterLink
            to="/register"
            class="link"
            :style="{ color: colors.black }"
          >Создать аккаунт</RouterLink>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { colors } from '@/constants/colors'
import RInput from '@/components/RInput.vue'
import RButton from '@/components/RButton.vue'
import { useAppStore } from '@/store/app'

const router = useRouter()

const appStore = useAppStore()

const email = ref('')
const password = ref('')

const disabled = computed(() => {
  const values = [
    email.value,
    password.value,
  ]

  return !values.every((value) => value)
})

const onSubmit = async () => {
  const success = await appStore.login(email.value, password.value)

  if (success) {
    router.push('/')
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

.register {
  text-align: center;
  margin-top: 20px;
  display: block;
  font-size: 18px;
  
  .link {
    font-size: 18px;
    text-decoration: underline;
  }
}
</style>
