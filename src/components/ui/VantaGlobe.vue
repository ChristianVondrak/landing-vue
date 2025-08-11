<template>
  <div ref="el" class="vanta-globe-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const el = ref<HTMLElement|null>(null)
let vantaEffect: any = null

onMounted(() => {
  if (!el.value || !(window as any).VANTA) return

  vantaEffect = (window as any).VANTA.GLOBE({
    el: el.value,
    backgroundColor: 0x23153c,
    color:           0xff3f81,
    color2:          0xffffff,
    size:            1.4,
    mouseControls:   true,
    touchControls:   true,
    gyroControls:    false,
    minHeight:       200.0,
    minWidth:        200.0,
    scale:           1.0,
    scaleMobile:     1.0,
  })
})

onUnmounted(() => {
  if (vantaEffect && vantaEffect.destroy) {
    vantaEffect.destroy()
    vantaEffect = null
  }
})
</script>

<style scoped>
.vanta-globe-container {
  position: absolute;
  inset: 0;
  z-index: -1;
}
</style>


