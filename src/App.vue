<template>
  <v-layout>
    <RHeader></RHeader>

    <v-main>
      <div style="padding: 60px 0;">
        <RouterView />
      </div>

      <RFooter></RFooter>
    </v-main>
  </v-layout>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { useMainStore } from './store/main'
import { computed, onMounted, ref, watch } from 'vue'
import { api } from './api';
import RFooter from '@/components/RFooter.vue'
import RHeader from '@/components/RHeader.vue'

const route = useRoute()

const mainStore = useMainStore()
</script>

<style scoped lang="scss"></style>
