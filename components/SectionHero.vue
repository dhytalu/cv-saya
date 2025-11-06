<template>
  <section id="hero" class="relative overflow-hidden bg-white dark:bg-gray-900">
    <!-- <div class="absolute -top-24 -left-24 w-80 h-80 bg-brand/20 blur-3xl rounded-full"></div> -->
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Building Beauty Through Lines <span class="text-rose-600">of Code.</span>
        </h1>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Menghadirkan solusi web yang efisien dan modern untuk mendukung transformasi digital UMKM, sekolah, desa, dan perusahaan. Saya berfokus pada desain antarmuka yang intuitif, performa tinggi, dan ramah pengguna.
        </p>
        <div class="mt-8 flex gap-4">
          <Button href="https://buatcreative.web.id/" target="_blank" label="Lihat Proyek" icon="pi pi-briefcase" class="p-button-raised p-button-primary" />
          <Button href="https://buatcreative.web.id/kontak/" target="_blank" label="Hubungi Saya" icon="pi pi-send" severity="secondary" class="p-button-outlined" />
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
          <template #content>
            <ClientOnly>
              <template v-if="hasLottie">
                <lottie-player
                  src="/assets/homeanimasi.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style="width:100%;height:auto"
                ></lottie-player>
              </template>
            </ClientOnly>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Cek apakah file Lottie JSON lokal tersedia; jika tidak, fallback ke GIF
const hasLottie = ref(false)
onMounted(async () => {
  try {
    const res = await fetch('/assets/homeanimasi.json', { method: 'HEAD' })
    hasLottie.value = res.ok
  } catch {
    hasLottie.value = false
  }
})
</script>