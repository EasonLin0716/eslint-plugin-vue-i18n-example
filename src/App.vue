<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const description = t('description')
</script>

<template>
  <div>
    <div>{{ t('message.goodbye') }}</div>
    <div>{{ t('message.welcome') }}</div>
    <div>{{ description }}</div>
  </div>
</template>

<style></style>