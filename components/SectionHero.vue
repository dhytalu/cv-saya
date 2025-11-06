<template>
  <section id="hero" class="relative overflow-hidden bg-white dark:bg-gray-900">
    <div class="absolute -top-24 -left-24 w-80 h-80 bg-brand/20 blur-3xl rounded-full"></div>
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transforming Through <span class="text-brand">Change</span>
        </h1>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Membangun jembatan antara desain, kode, dan cerita. Saya berbagi proses belajar
          dan membangun antarmuka modern dengan fokus pada UX, aksesibilitas, dan performa.
        </p>
        <div class="mt-8 flex gap-4">
          <Button label="Lihat Proyek" icon="pi pi-briefcase" class="p-button-raised p-button-primary" />
          <Button label="Hubungi Saya" icon="pi pi-send" severity="secondary" class="p-button-outlined" />
        </div>
        <div class="mt-10 flex items-center gap-3">
          <Avatar label="NA" class="bg-brand text-white" />
          <Chip label="Nuxt" icon="pi pi-code" />
          <Chip label="Tailwind" icon="pi pi-palette" />
          <Chip label="PrimeVue" icon="pi pi-sparkles" />
        </div>
      </div>
      <div>
        <Card class="shadow-xl">
          <template #title>Showcase</template>
          <template #content>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Showcase"
              class="rounded-xl"
            />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>