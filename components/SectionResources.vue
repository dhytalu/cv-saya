<template>
  <section class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-2xl font-semibold text-gray-900">Resources</h2>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <template #title>Slicing Responsive Personal Website</template>
          <template #content>
            <p class="text-gray-600">Belajar responsive web dengan HTML & CSS murni.</p>
          </template>
          <template #footer>
            <Button label="Baca" icon="pi pi-external-link" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Landing Page UI Design Tutorial</template>
          <template #content>
            <p class="text-gray-600">Walkthrough desain end-to-end di Figma.</p>
          </template>
          <template #footer>
            <Button label="Baca" icon="pi pi-external-link" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Slicing Landing Page - Bootstrap</template>
          <template #content>
            <p class="text-gray-600">Membangun cepat dengan Bootstrap framework.</p>
          </template>
          <template #footer>
            <Button label="Baca" icon="pi pi-external-link" size="small" />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>