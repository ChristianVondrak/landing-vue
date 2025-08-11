<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/ui/Navbar.vue'
import FooterBar from '@/components/ui/FooterBar.vue'
</script>


