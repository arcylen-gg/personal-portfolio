<script setup lang="ts">
const { path } = useRoute()

const { data: post } = await useAsyncData(`blog-${path}`, () =>
  queryContent(path as string).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

useSeoMeta({
  title: () => `${post.value?.title} — Arcylen Gutierrez`,
  description: () => post.value?.description ?? '',
})
</script>

<template>
  <div class="min-h-screen bg-vs-bg py-32">
    <div class="max-w-3xl mx-auto px-6">
      <!-- Back link -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 text-vs-muted hover:text-accent text-sm font-mono mb-10 transition-colors"
      >
        ← Back to Blog
      </NuxtLink>

      <!-- Article -->
      <article v-if="post">
        <header class="mb-12">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-2 py-0.5 bg-vs-sidebar text-accent text-xs font-mono rounded"
            >
              {{ tag }}
            </span>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold text-vs-text mb-4 leading-tight">
            {{ post.title }}
          </h1>

          <p v-if="post.description" class="text-vs-muted text-base mb-6">
            {{ post.description }}
          </p>

          <div
            class="flex items-center gap-4 pb-6 border-b border-vs-border text-vs-muted text-sm font-mono"
          >
            <span>Arcylen Gutierrez</span>
            <span class="text-vs-border">·</span>
            <span v-if="post.date">
              {{
                new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            </span>
          </div>
        </header>

        <!-- Post body -->
        <div
          class="prose prose-invert prose-blue max-w-none prose-headings:text-vs-text prose-p:text-vs-muted prose-a:text-accent prose-strong:text-vs-text prose-code:text-accent prose-code:bg-vs-sidebar prose-code:px-1 prose-code:rounded prose-pre:bg-vs-sidebar prose-pre:border prose-pre:border-vs-border"
        >
          <ContentRenderer :value="post" />
        </div>
      </article>
    </div>
  </div>
</template>
