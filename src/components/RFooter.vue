<template>
  <footer class="footer" :style="{ backgroundColor: colors.layout, height: footerHeight }">
    <div class="container">
      <v-row>
        <v-col>
          <RLogo></RLogo>
        </v-col>

        <v-col>
          <h3 class="footer__title">Компания</h3>

          <ul>
            <li>О нас</li>
            <li>Магазины Ryile</li>
            <li>Отзывы</li>
          </ul>
        </v-col>

        <v-col>
          <h3 class="footer__title">Помощь</h3>

          <ul>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>Возврат и обмен</li>
          </ul>
        </v-col>

        <v-col>
          <h3 class="footer__title">Служба поддержки</h3>

          <ul>
            <li>+7 900 736 56 67 | support@mail.ru</li>
            <li>c 8:00 до 20:00 по московскому времени</li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '@/constants/colors'
import RLogo from '@/components/RLogo.vue'

const footerHeight = computed(() => {
  const value = 264

  return `${value}px`
})
</script>

<style lang="scss" scoped>
.footer {
  font-size: 24px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__title {
    font-weight: bold;
  }
}
</style>
