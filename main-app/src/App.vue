<script setup>
import { NConfigProvider } from 'naive-ui'
import { useNaiveTheme } from '@/configs/useNaiveTheme'

const { themeOverrides } = useNaiveTheme()
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>
