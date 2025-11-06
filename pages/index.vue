<template>
  <main class="min-h-screen bg-white">
    <SectionHero />
    <SectionTimeline />
    <SectionImpact />
    <SectionResources />
    <SectionCollaboration />

    <footer class="border-t">
      <div class="mx-auto max-w-7xl px-6 py-8 flex justify-between items-center text-sm text-gray-600">
        <p>© {{ new Date().getFullYear() }} Nama Anda</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-brand"><i class="pi pi-github" /></a>
          <a href="#" class="hover:text-brand"><i class="pi pi-linkedin" /></a>
          <a href="#" class="hover:text-brand"><i class="pi pi-twitter" /></a>
        </div>
      </div>
    </footer>
  </main>
</template>