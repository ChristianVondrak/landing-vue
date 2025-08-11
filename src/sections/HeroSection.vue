<template>
  <section id="hero" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <VantaGlobe />
    </div>
    <BaseContainer>
      <div class="hero-card">
        <h1>
          Web apps that turn <span class="accent">ideas → product</span>
        </h1>
        <p class="sub">
          I build fast, reliable software with <strong>Laravel + Vue</strong>.
          From MVP to production: dashboards, APIs, payments & maps.
        </p>
        <div class="cta">
          <BaseButton href="#contact">Start a project</BaseButton>
          <BaseButton href="#work" :ghost="true">See work</BaseButton>
        </div>
        <ul class="trust">
          <li>⚡ 5+ years building for real businesses</li>
          <li>✅ Clean code, on-time delivery</li>
          <li>🌍 Remote friendly</li>
        </ul>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import VantaGlobe from '@/components/ui/VantaGlobe.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style scoped>
.hero{
  position: relative;
  min-height: 100vh;
  display: grid; align-items: center;
  overflow: hidden;
  isolation: isolate;
}
.hero-bg{ position:absolute; inset:0; pointer-events:none; z-index:0 }
.hero :deep(.container){ position: relative; z-index: 1 }
.hero-card{
  max-width:760px;
  background: var(--glass);
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  padding: clamp(18px, 4vw, 36px);
  backdrop-filter: blur(10px) saturate(130%);
  box-shadow: 0 10px 40px rgba(0,0,0,.35);
  animation: fadeUp .8s ease-out both .05s;
}
@keyframes fadeUp{ from{ opacity:0; transform: translateY(10px) } to{ opacity:1; transform: translateY(0) } }
h1{ margin:0 0 10px; font-size: clamp(32px, 4.5vw, 54px); line-height:1.1 }
.accent{ color: var(--accent) }
.sub{ margin: 0 0 18px; color: var(--muted); font-size: clamp(15px, 1.8vw, 18px) }
.cta{ display:flex; gap:12px; flex-wrap:wrap; margin: 18px 0 10px }
.trust{ display:flex; gap:14px; padding:0; margin:14px 0 0; list-style:none; color:var(--muted); font-size:.95rem; flex-wrap:wrap }
</style>


