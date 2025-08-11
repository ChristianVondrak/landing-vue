<template>
  <component
    :is="as"
    class="btn"
    :class="{ 'btn--ghost': ghost, 'btn--sm': size === 'sm' }"
    v-bind="$attrs"
  >
    <slot />
  </component>
  
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  ghost?: boolean
  size?: 'sm' | 'md'
}>(), {
  as: 'a',
  ghost: false,
  size: 'md'
})
</script>


