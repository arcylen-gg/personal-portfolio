<script setup lang="ts">
defineProps<{
  path: string
  size?: number | string
}>()
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path :d="path" />
  </svg>
</template>