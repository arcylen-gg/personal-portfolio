<script setup lang="ts">
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :style="props.delay ? { transitionDelay: `${props.delay}ms` } : undefined"
    :class="[
      'transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
    ]"
  >
    <slot />
  </div>
</template>
