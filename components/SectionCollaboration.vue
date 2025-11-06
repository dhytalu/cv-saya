<template>
  <section id="collaboration" class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Let's work together</h2>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <template #title>Mentoring & code reviews</template>
          <template #content>
            <p class="text-gray-600">Sesi satu-satu untuk unblock proyek dan merapikan portfolio.</p>
          </template>
          <template #footer>
            <Button label="Book" icon="pi pi-calendar" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Workshops & collaborations</template>
          <template #content>
            <p class="text-gray-600">Undang saya untuk guest speak dan kelas komunitas.</p>
          </template>
          <template #footer>
            <Button label="Discuss" icon="pi pi-comments" size="small" />
          </template>
        </Card>
        <Card>
          <template #title>Project-based services</template>
          <template #content>
            <p class="text-gray-600">Konsultasi dari desain hingga implementasi frontend.</p>
          </template>
          <template #footer>
            <Button label="Start" icon="pi pi-rocket" size="small" />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>