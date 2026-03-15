<script setup lang="ts">
defineProps<{
  name: string
  icon?: string | null
}>()

const hideImg = (e: Event) => {
  ;(e.target as HTMLImageElement).style.display = 'none'
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 px-3 py-2 bg-vs-surface border border-vs-border text-vs-text text-xs font-mono rounded-md hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 hover:shadow-sm hover:shadow-accent/10 transition-all duration-200 cursor-default"
  >
    <img
      v-if="icon"
      :src="icon"
      :alt="name"
      class="w-4 h-4 object-contain flex-shrink-0"
      loading="lazy"
      @error="hideImg"
    />
    {{ name }}
  </span>
</template>
