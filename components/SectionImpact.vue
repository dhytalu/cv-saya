<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-2xl font-semibold text-gray-900">Impact Areas</h2>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <template #title>UI/UX</template>
          <template #content>
            <p class="text-gray-600">Mentransformasikan ide menjadi antarmuka intuitif yang memikat.</p>
          </template>
          <template #footer>
            <Button label="Explore" icon="pi pi-arrow-right" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Frontend</template>
          <template #content>
            <p class="text-gray-600">Pengalaman web halus dan responsif dengan praktik terbaik SEO.</p>
          </template>
          <template #footer>
            <Button label="Explore" icon="pi pi-arrow-right" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Content Creation</template>
          <template #content>
            <p class="text-gray-600">Mendemistifikasi teknologi lewat storytelling yang edukatif.</p>
          </template>
          <template #footer>
            <Button label="Explore" icon="pi pi-arrow-right" size="small" />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>