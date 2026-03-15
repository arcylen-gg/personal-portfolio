<script setup lang="ts">
import { ExternalLink, Code2 } from 'lucide-vue-next'
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="group bg-vs-surface border border-vs-border rounded-lg p-6 flex flex-col hover:border-accent/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
  >
    <!-- Card header -->
    <div class="flex items-start justify-between mb-5">
      <div
        class="w-11 h-11 flex items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors"
      >
        <Code2 class="w-5 h-5 text-accent" />
      </div>
      <div class="flex gap-3 pt-1">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="text-vs-muted hover:text-accent transition-colors"
          aria-label="View on GitHub"
        >
          <IconGithub class="w-4 h-4" />
        </a>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="text-vs-muted hover:text-accent transition-colors"
          aria-label="View live site"
        >
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <h3
        class="text-vs-text font-semibold text-base mb-1 group-hover:text-accent transition-colors"
      >
        {{ project.title }}
      </h3>
      <p v-if="project.duration" class="text-vs-muted text-xs font-mono mb-3">
        {{ project.duration }}
      </p>
      <p class="text-vs-muted text-sm leading-relaxed">
        {{ project.description }}
      </p>
    </div>

    <!-- Tech stack -->
    <div class="flex flex-wrap gap-2 mt-5 pt-4 border-t border-vs-border">
      <span
        v-for="tech in project.tech"
        :key="tech"
        class="px-2 py-1 bg-vs-sidebar text-vs-muted text-xs font-mono rounded"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
