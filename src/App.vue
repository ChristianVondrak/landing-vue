<script setup>
import VantaGlobe from './components/VantaGlobe.vue'
</script>

<template>
  <div id="app">
    <!-- Fondo Vanta Globe -->
    <VantaGlobe />

    <!-- Aquí tu contenido -->
    <div class="content">
      <h1>¡Hola, Vue + Vanta!</h1>
      <p>Tu aplicación ya tiene un fondo animado.</p>
    </div>
  </div>
</template>

<style>

.content {
  position: relative; /* para que aparezca encima */
  z-index: 1;
  color: #fff;
  padding: 2rem;
}
</style>
