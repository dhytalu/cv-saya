<script setup lang="ts">
const chapters = [
  { period: '2019–2021', title: 'Senior Marketing Engineer', subtitle: 'Business meets tech' },
  { period: '2021–2023', title: 'Senior UI Designer', subtitle: 'Designing learning experiences' },
  { period: '2023–Present', title: 'Software Engineer', subtitle: 'Building with code' },
  { period: '2023–Present', title: 'Content Creator', subtitle: 'Documenting the learning' },
]
</script>

<template>
  <section id="timeline" class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">The Plot Twists</h2>
      <div class="mt-8 relative">
        <div class="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
        <div class="space-y-6">
          <div v-for="(c, i) in chapters" :key="i" class="grid grid-cols-[40px_1fr] gap-4">
            <div class="flex items-center justify-center">
              <span class="w-3 h-3 rounded-full bg-brand"></span>
            </div>
            <Card>
              <template #title>{{ c.title }}</template>
              <template #content>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ c.period }} — {{ c.subtitle }}</p>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>