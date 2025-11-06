<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const useDark = saved ? saved === 'dark' : prefersDark
  if (useDark) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const nav = [
  { label: 'Hero', href: '#hero' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Impact', href: '#impact' },
  { label: 'Resources', href: '#resources' },
  { label: 'Collab', href: '#collaboration' },
]
</script>

<template>
  <header class="fixed inset-x-0 backdrop-blur bg-white/50 dark:bg-gray-900/50 top-0 z-50 bg-transparent">
    <div class="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold text-gray-900 dark:text-white tracking-tight text-2xl">Kadican</NuxtLink>

      <nav class="hidden sm:flex items-center gap-6 text-sm">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-gray-600 dark:text-gray-300 hover:text-rose-600"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        type="button"
        @click="toggleTheme"
        aria-label="Toggle theme"
      >
        <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
        <span>{{ isDark ? 'Light' : 'Dark' }}</span>
      </button>
    </div>
  </header>
</template>