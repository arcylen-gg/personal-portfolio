<script setup lang="ts">
import { mdiOpenInNew, mdiCodeBraces, mdiGithub } from '@mdi/js'
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
  size?: 'wide' | 'tall' | 'normal'
}>()

const categoryColor: Record<string, string> = {
  Laravel:    'from-red-900/30 to-transparent',
  'Vue.js':   'from-emerald-900/30 to-transparent',
  'React.js': 'from-cyan-900/30 to-transparent',
  'Next.js':  'from-slate-700/30 to-transparent',
  WordPress:  'from-blue-900/30 to-transparent',
  OctoberCMS: 'from-teal-900/30 to-transparent',
  WinterCMS:  'from-sky-900/30 to-transparent',
  Drupal:     'from-indigo-900/30 to-transparent',
  'REST API': 'from-violet-900/30 to-transparent',
  GraphQL:    'from-pink-900/30 to-transparent',
  Nuxt:       'from-green-900/30 to-transparent',
}

function getBg(tech: string[]): string {
  for (const t of tech) {
    if (categoryColor[t]) return categoryColor[t]
  }
  return 'from-accent/10 to-transparent'
}
</script>

<template>
  <div
    :class="[
      'group relative overflow-hidden rounded-xl border border-vs-border bg-vs-surface flex flex-col',
      'hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300',
      size === 'wide' ? 'p-7' : size === 'tall' ? 'p-6' : 'p-5',
    ]"
  >
    <!-- Gradient bg tint -->
    <div
      class="absolute inset-0 bg-gradient-to-br opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
      :class="getBg(project.tech)"
    />

    <!-- Top bar -->
    <div class="relative flex items-start justify-between mb-4">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors flex-shrink-0">
          <MdiIcon :path="mdiCodeBraces" :size="16" class="text-accent" />
        </div>
        <div v-if="project.url || project.github" class="flex gap-2">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank" rel="noopener"
            class="text-vs-muted hover:text-accent transition-colors"
            aria-label="GitHub"
            @click.stop
          >
            <MdiIcon :path="mdiGithub" :size="16" />
          </a>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank" rel="noopener"
            class="text-vs-muted hover:text-accent transition-colors"
            aria-label="Live site"
            @click.stop
          >
            <MdiIcon :path="mdiOpenInNew" :size="16" />
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative flex-1 flex flex-col">
      <h3
        :class="[
          'font-semibold text-vs-text group-hover:text-accent transition-colors leading-snug mb-2',
          size === 'wide' ? 'text-lg' : 'text-sm',
        ]"
      >
        {{ project.title }}
      </h3>
      <p
        :class="[
          'text-vs-muted leading-relaxed flex-1',
          size === 'wide' ? 'text-sm' : 'text-xs',
        ]"
      >
        {{ project.description }}
      </p>

      <!-- Tech badges -->
      <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-vs-border/60">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-0.5 bg-vs-sidebar text-vs-muted text-xs font-mono rounded-md border border-vs-border/40"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>