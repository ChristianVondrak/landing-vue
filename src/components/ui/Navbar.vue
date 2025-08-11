<template>
  <header class="nav" :class="{ 'nav--solid': isSolid }">
    <BaseContainer>
      <a class="brand" href="#hero">Vondrak Studio</a>
      <nav class="links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact" class="btn btn--sm">Let’s talk</a>
      </nav>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useNavbarScroll } from '@/composables/useNavbarScroll'

const { isSolid } = useNavbarScroll()
</script>

<style scoped>
.nav{
  position:sticky; top:0; z-index:10;
  backdrop-filter: saturate(160%) blur(8px);
  background: linear-gradient(to bottom, rgba(5,5,15,.6), transparent);
  border-bottom: 1px solid var(--stroke);
}
.nav--solid{ background: rgba(5,5,15,.85) }
.brand{ color:#fff; font-weight:700; text-decoration:none; letter-spacing:.2px }
.links{ display:flex; gap:14px; align-items:center }
.links a{ color:var(--muted); text-decoration:none; font-size:.95rem }
.links a:hover{ color:var(--white) }
.nav :deep(.container){ display:flex; align-items:center; justify-content:space-between; padding:14px 8px }
</style>


