<template>
  <section id="work" class="section">
    <BaseContainer>
      <h2 class="section-title">Proyectos destacados</h2>
      <div class="grid">
        <a class="work" href="#"><span>Panel RR. HH.</span></a>
        <a class="work" href="#"><span>Módulo de Reportes</span></a>
        <a class="work" href="#"><span>Alertas y Notificaciones</span></a>
      </div>
      <p class="muted">¿Quieres una demo en vivo? <a href="#contact">Escríbeme</a>.</p>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:8px }
.work{
  position:relative; display:grid; place-items:end start; aspect-ratio: 16/10;
  text-decoration:none; color:#fff; overflow:hidden; border-radius:12px;
  background: linear-gradient(120deg, rgba(255,77,172,.25), rgba(255,255,255,.06));
  border:1px solid var(--stroke);
}
.work span{ padding:10px 12px; background: rgba(0,0,0,.35); border-top-right-radius:10px }
.muted{ color: var(--muted); margin-top:10px }
@media (max-width: 900px){ .grid{ grid-template-columns: 1fr } }
</style>


