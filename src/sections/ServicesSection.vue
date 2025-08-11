<template>
  <section id="services" class="section">
    <BaseContainer>
      <h2 class="section-title">Servicios</h2>
      <div class="cards">
        <BaseCard>
          <h3>Landing pages que convierten</h3>
          <p>Diseñadas para captar contactos y ventas. Textos claros, diseño atractivo y carga rápida.</p>
        </BaseCard>
        <BaseCard>
          <h3>Tiendas online (ecommerce)</h3>
          <p>Catálogo, carrito y pagos. Integración con medios de pago locales y envío.</p>
        </BaseCard>
        <BaseCard>
          <h3>Páginas informativas</h3>
          <p>Webs corporativas, portfolios y micrositios responsive para presentar tu negocio con confianza.</p>
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


