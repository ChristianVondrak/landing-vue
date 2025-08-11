<template>
  <section id="services" class="section">
    <BaseContainer>
      <h2 class="section-title">What I do</h2>
      <div class="cards">
        <BaseCard>
          <h3>Custom Web Apps</h3>
          <p>Laravel + Vue SPAs, role-based dashboards, REST APIs, queues, notifications.</p>
        </BaseCard>
        <BaseCard>
          <h3>Reports & Automation</h3>
          <p>PDF/Excel exports, background jobs, third-party integrations (WorkSnaps, Stripe, etc.).</p>
        </BaseCard>
        <BaseCard>
          <h3>Geo & Maps</h3>
          <p>Google Maps, GeoJSON boundaries, spatial queries, blazing-fast search.</p>
        </BaseCard>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
</script>

<style scoped>
.cards{ display:grid; grid-template-columns: repeat(3, 1fr); gap:16px }
.cards h3{ margin:0 0 8px; font-size:1.15rem }
.cards p{ margin:0; color:var(--muted) }
@media (max-width: 900px){ .cards{ grid-template-columns: 1fr } }
</style>


