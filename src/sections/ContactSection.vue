<template>
  <section id="contact" class="section">
    <BaseContainer>
      <div class="contact">
        <h2 class="section-title">Tell me about your idea</h2>
        <form class="contact-form" @submit.prevent>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="What do you need?"></textarea>
          <button class="btn" type="submit">Request a quote</button>
        </form>
        <div class="alt">
          <a href="mailto:hello@vondrak.dev">hello@vondrak.dev</a>
          <span>·</span>
          <a target="_blank" rel="noreferrer" href="https://wa.me/00000000000">WhatsApp</a>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<style scoped>
.contact{ display:grid; gap:16px }
.contact-form{
  display:grid; grid-template-columns: 1fr 1fr; gap:12px;
  background: var(--glass); border:1px solid var(--stroke); border-radius: var(--radius);
  padding:16px;
}
.contact-form textarea{ grid-column: 1 / -1 }
.contact-form input, .contact-form textarea{
  width:100%; padding:12px 12px; border-radius:10px; border:1px solid var(--stroke);
  background: rgba(0,0,0,.25); color:#fff; outline:none;
}
.contact-form input::placeholder, .contact-form textarea::placeholder{ color:#cfcfe6bb }
.alt{ color: var(--muted) }
.alt a{ color:#fff; text-decoration:none }
@media (max-width: 900px){ .contact-form{ grid-template-columns: 1fr } }
</style>


