<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Arcylen Gutierrez',
  description:
    'Thoughts on web development, Laravel, Vue.js, and building modern web applications.',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog').sort({ date: -1 }).find(),
)
</script>

<template>
  <div class="min-h-screen bg-vs-bg py-32">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16">
        <p class="font-mono text-accent text-sm mb-2">// blog</p>
        <h1 class="text-4xl md:text-5xl font-bold text-vs-text">Writing</h1>
        <p class="text-vs-muted mt-4 text-base">
          Thoughts on web development, tools, and the craft of building software.
        </p>
        <div class="mt-4 w-12 h-1 bg-accent rounded" />
      </div>

      <!-- Posts list -->
      <div v-if="posts?.length" class="space-y-6">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="group block p-6 bg-vs-sidebar border border-vs-border rounded-lg hover:border-accent/40 transition-all duration-200"
        >
          <div class="flex items-start justify-between gap-6">
            <div class="flex-1 min-w-0">
              <h2
                class="text-vs-text font-semibold text-lg group-hover:text-accent transition-colors mb-2"
              >
                {{ post.title }}
              </h2>
              <p class="text-vs-muted text-sm leading-relaxed mb-3">
                {{ post.description }}
              </p>
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-2 py-0.5 bg-vs-surface text-vs-muted text-xs font-mono rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="flex-shrink-0 text-right">
              <p v-if="post.date" class="text-vs-muted text-xs font-mono">
                {{
                  new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
                }}
              </p>
              <p class="text-accent text-xs mt-2 group-hover:underline">Read →</p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20">
        <p class="font-mono text-vs-muted">// No posts yet. Check back soon!</p>
      </div>
    </div>
  </div>
</template>
