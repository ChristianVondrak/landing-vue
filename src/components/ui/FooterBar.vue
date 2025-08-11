<template>
  <footer class="footer">
    <BaseContainer>
      <p class="muted">© {{ new Date().getFullYear() }} Vondrak Studio</p>
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<style scoped>
.footer{ border-top:1px solid var(--stroke); padding:16px 0; margin-top:32px }
.muted{ color: var(--muted) }
</style>


