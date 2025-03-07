<template>
  <v-layout>
    <RHeader></RHeader>

    <v-main>
      <div
        :style="route.fullPath === '/' ? '' : `padding: ${appStore.isMobile ? 30 : 60}px 0;`"
      >
        <RouterView />
      </div>

      <RFooter></RFooter>
    </v-main>
  </v-layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import RFooter from '@/components/RFooter.vue'
import RHeader from '@/components/RHeader.vue'
import { useAppStore } from './store/app';

const route = useRoute()

const appStore = useAppStore()

onMounted(() => appStore.init())
</script>

<style scoped lang="scss"></style>
