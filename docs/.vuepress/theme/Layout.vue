<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import AdsenseB from './AdsenseB.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <AdsenseB />
    </template>
  </ParentLayout>
</template>