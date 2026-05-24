<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'

useSeoMeta({
  title: 'Personal Projects — Arcylen Gutierrez',
  description:
    'Side projects built by Arcylen Gutierrez — exploring SaaS, payments, and full-stack experiments end-to-end.',
  ogTitle: 'Personal Projects — Arcylen Gutierrez',
  ogDescription:
    'Side projects built by Arcylen Gutierrez — exploring SaaS, payments, and full-stack experiments end-to-end.',
})
</script>

<template>
  <div class="pt-20">
    <!-- Back link -->
    <div class="max-w-6xl mx-auto px-6 pt-8">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-vs-muted hover:text-accent text-sm font-mono transition-colors"
      >
        <MdiIcon :path="mdiArrowLeft" :size="14" />
        Back to home
      </NuxtLink>
    </div>

    <SectionsPersonalProjectsSection />
  </div>
</template>
