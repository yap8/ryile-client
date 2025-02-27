<template>
  <footer class="footer" :style="{ backgroundColor: colors.layout, height: appStore.isMobile ? undefined : '264px' }">
    <div :class="`container ${appStore.isMobile ? '' : 'd-flex align-center'}`">
      <v-row>
        <v-col v-if="!appStore.isMobile">
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

        <v-col v-if="!appStore.isMobile">
          <h3 class="footer__title">Служба поддержки</h3>

          <ul>
            <li>+7 900 736 56 67 | support@mail.ru</li>
            <li>c 8:00 до 20:00 по московскому времени</li>
          </ul>
        </v-col>
      </v-row>

      <v-row v-if="appStore.isMobile">
        <v-col>
          <h3 class="footer__title">Служба поддержки</h3>

          <ul>
            <li>+7 900 736 56 67 | support@mail.ru</li>
            <li>c 8:00 до 20:00 по московскому времени</li>
          </ul>
        </v-col>
      </v-row>

      <v-row v-if="appStore.isMobile">
        <v-col class="d-flex justify-center">
          <RLogo></RLogo>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '@/constants/colors'
import RLogo from '@/components/RLogo.vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.footer {
  font-size: 24px;

  .container {
    height: 100%;
  }

  &__title {
    font-weight: bold;
  }
}
</style>
