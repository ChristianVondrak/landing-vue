<template>
  <div class="plan" :class="{ 'plan--highlight': highlight }">
    <div v-if="highlight && badge" class="badge">{{ badge }}</div>
    <div class="plan__head">
      <h3 class="plan__title">
        <span v-if="titleEmphasis">{{ titleBefore }}<span class="accent">{{ titleEmphasis }}</span>{{ titleAfter }}</span>
        <span v-else>{{ title }}</span>
      </h3>
      <p v-if="subtitle" class="plan__subtitle">{{ subtitle }}</p>
      <p class="plan__price" v-if="price" v-html="price"></p>
    </div>
    <ul class="plan__features" v-if="features?.length">
      <li v-for="(feature, i) in features" :key="i">{{ feature }}</li>
    </ul>
    <a :href="ctaHref" class="btn plan__cta">{{ ctaText }}</a>
    <p v-if="note" class="plan__note">{{ note }}</p>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

type Props = {
  title?: string
  titleBefore?: string
  titleEmphasis?: string
  titleAfter?: string
  subtitle?: string
  price?: string // permitir HTML simple como <strong>$399</strong> USD
  features?: string[]
  ctaText?: string
  ctaHref?: string
  note?: string
  highlight?: boolean
  badge?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  titleBefore: '',
  titleEmphasis: '',
  titleAfter: '',
  subtitle: '',
  price: '',
  features: () => [],
  ctaText: 'Contratar ahora',
  ctaHref: '#contact',
  note: '',
  highlight: false,
  badge: ''
})
</script>

<style scoped>
.plan{
  position:relative;
  display:flex; flex-direction:column; align-items:stretch;
  background: var(--glass);
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 20px 18px 14px;
  box-shadow: 0 10px 40px rgba(0,0,0,.35);
  transition: transform .18s ease, box-shadow .2s ease, border-color .2s ease;
}
.plan:hover{
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(34,211,238,.45);
  box-shadow: 0 14px 54px rgba(34,211,238,.25);
}

.plan--highlight{
  border-color: rgba(34,211,238,.45);
  box-shadow: 0 12px 50px rgba(34,211,238,.25);
  transform: translateY(-2px);
}
.plan--highlight:hover{
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 16px 64px rgba(34,211,238,.3);
}

.badge{
  position:absolute; left:50%; transform:translateX(-50%);
  top:-12px; padding:6px 10px; border-radius:999px;
  background: var(--accent); color:#0b1220; font-weight:800; font-size:.8rem;
  border:1px solid rgba(255,255,255,.2);
}

.plan__head{ text-align:center; margin-bottom: 8px }
.plan__title{ margin:4px 0 2px; font-size:1.6rem }
.plan__title .accent{ color: var(--accent) }
.plan__subtitle{ margin:0 0 8px; color:var(--muted); font-size:.95rem }
.plan__price{ margin:0 0 12px; font-size:1.8rem }
.plan__price strong{ font-size:2.2rem }

.plan__features{ list-style:none; padding:0; margin:0 0 14px; display:grid; gap:10px }
.plan__features li{ position:relative; padding-left:24px; color: var(--white) }
.plan__features li::before{ content:"✓"; position:absolute; left:0; top:0; color: var(--accent) }

.plan__cta{ width:100%; margin-top:auto }
.plan__note{ margin:10px 0 0; text-align:center; color:var(--muted); font-size:.8rem }
</style>


