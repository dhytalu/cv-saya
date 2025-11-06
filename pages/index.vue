<template>
  <main class="min-h-screen bg-white dark:bg-gray-950">
    <SiteHeader />
    <SectionHero />
    <SectionTimeline />
    <SectionImpact />
    <SectionResources />
    <SectionCollaboration />

    <footer class="border-t">
      <div class="mx-auto max-w-7xl px-6 py-8 flex justify-between items-center text-sm text-gray-600">
        <p>© {{ new Date().getFullYear() }} Kadican</p>
        <div class="flex gap-4">
          <a href="https://github.com/dhytalu" class="hover:text-rose-600" target="_blank"><i class="pi pi-github" /></a>
          <a href="https://www.instagram.com/dhytalu_/" class="hover:text-rose-600" target="_blank"><i class="pi pi-instagram" /></a>
        </div>
      </div>
    </footer>
  </main>
</template>