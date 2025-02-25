<template>
  <v-app-bar
    :color="colors.layout"
    :height="height"
    :elevation="0"
    :order="-1"
    >
      <div class="container">
        <v-row>
          <v-col>
            <RLogo></RLogo>
          </v-col>

          <v-col v-if="userStore.userId">
            <nav class="nav">
              <ul class="nav__list">
                <li
                  v-for="navItem in navItems"
                  class="nav__list-item"
                >
                  <RouterLink
                    class="nav__link"
                    :to="navItem.to"
                    :style="{ color: colors.black }"
                  >
                    {{ navItem.text }}
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </v-col>

          <v-col v-if="userStore.userId">
            <nav class="side-nav">
              <ul class="side-nav__list">
                <li v-for="navItem in sideNavItems" class="side-nav__list-item">
                  <RouterLink
                    class="side-nav__link"
                    :to="navItem.to"
                  >
                    <v-icon
                      class="side-nav__icon"
                      height="28"
                      :style="{ color: colors.black }"
                    >
                      {{ navItem.icon }}
                    </v-icon>
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '@/constants/colors'
import logoSVG from '@/assets/logo.svg'
import { useUserStore } from '@/store/user'
import RLogo from '@/components/RLogo.vue'

const userStore = useUserStore()

const navItems = [
  {
    to: '/items/clothes',
    text: 'Одежда',
  },
  {
    to: '/items/jewelry',
    text: 'Украшения',
  },
  {
    to: '/items/new',
    text: 'Новинки',
  },
]

const sideNavItems = computed(() => {
  return userStore.isAdmin ? [
    {
      to: '/form',
      icon: 'mdi-cog',
    },
    {
      to: '/profile',
      icon: 'mdi-account',
    },
  ] : [
    {
      to: '/cart',
      icon: 'mdi-cart',
    },
    {
      to: '/profile',
      icon: 'mdi-account',
    },
  ]
})

const height = computed(() => {
  const value = 172

  return value
})
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  
  &__list {
    height: 100%;
    max-width: 516px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list-item {

  }

  &__link {
    font-size: 28px;
  }
}

.side-nav {
  height: 100%;

  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__list-item {
    &:not(:last-child) {
      margin-right: 28px;
    }
  }

  &__link {

  }
}
</style>
