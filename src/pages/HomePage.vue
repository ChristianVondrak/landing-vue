<template>
  <DefaultLayout>
    <HeroSection />
    <section class="page">
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </section>
  </DefaultLayout>
  <a class="chip" href="#contact" title="Iniciar un proyecto">Hablemos</a>
  
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ServicesSection from '@/sections/ServicesSection.vue'
import WorkSection from '@/sections/WorkSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
</script>

<style scoped>
.page{ background: var(--page-bg) }
.chip{
  position: fixed; right: 18px; bottom: 18px; z-index: 30;
  background: var(--accent); color:#161622; text-decoration:none; font-weight:700;
  padding:10px 14px; border-radius: 999px; border:1px solid rgba(255,255,255,.2);
  box-shadow: 0 8px 26px rgba(255,77,172,.35);
}
</style>


