<script setup>
import { ref, provide, onMounted, watch } from 'vue'

// 黑夜模式状态管理
const isDarkMode = ref(false)

// 从 localStorage 读取保存的主题设置
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    // 检查系统偏好
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()
})

// 监听主题变化
watch(isDarkMode, newValue => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  updateTheme()
})

// 更新主题
const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

// 提供给子组件使用
provide('darkMode', {
  isDarkMode,
  toggleTheme
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
