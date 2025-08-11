<template>
  <article class="card"><slot /></article>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card{
  background: var(--glass);
  border:1px solid var(--stroke);
  border-radius: var(--radius);
  padding:18px;
}
</style>


