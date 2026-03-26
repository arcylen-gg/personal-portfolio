<script setup lang="ts">
import {
  mdiArrowRight,
  mdiLaravel,
  mdiVuejs,
  mdiReact,
  mdiLanguageTypescript,
  mdiWordpress,
  mdiLeaf,
  mdiSnowflake,
  mdiDrupal,
  mdiCodeBraces,
  mdiGraphql,
  mdiApi,
  mdiAccountBoxMultiple,
  mdiNuxt,
} from '@mdi/js'
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
  className?: string
  size?: 'wide' | 'normal'
}>()

// ── Theme map: primary tech → color + decoration ──────────────────────────
interface Theme {
  from: string       // tailwind gradient-from class
  icon: string       // text color class
  bg: string         // icon bg class
  decor: 'code' | 'dots' | 'grid' | 'bars' | 'lines' | 'circles'
  iconPath: string   // SVG path d=""
}

const themeMap: Record<string, Theme> = {
  'Laravel':    { from: 'from-red-900/25',    icon: 'text-red-400',    bg: 'bg-red-500/10',    decor: 'code',    iconPath: mdiLaravel },
  'Vue.js':     { from: 'from-emerald-900/25',icon: 'text-emerald-400',bg: 'bg-emerald-500/10',decor: 'lines',   iconPath: mdiVuejs },
  'React.js':   { from: 'from-cyan-900/25',   icon: 'text-cyan-400',   bg: 'bg-cyan-500/10',   decor: 'circles', iconPath: mdiReact },
  'Next.js':    { from: 'from-slate-700/25',  icon: 'text-slate-300',  bg: 'bg-slate-500/10',  decor: 'dots',    iconPath: mdiLanguageTypescript },
  'WordPress':  { from: 'from-blue-900/25',   icon: 'text-blue-400',   bg: 'bg-blue-500/10',   decor: 'grid',    iconPath: mdiWordpress },
  'OctoberCMS': { from: 'from-teal-900/25',   icon: 'text-teal-400',   bg: 'bg-teal-500/10',   decor: 'code',    iconPath: mdiLeaf },
  'WinterCMS':  { from: 'from-sky-900/25',    icon: 'text-sky-400',    bg: 'bg-sky-500/10',    decor: 'lines',   iconPath: mdiSnowflake },
  'Drupal':     { from: 'from-indigo-900/25', icon: 'text-indigo-400', bg: 'bg-indigo-500/10', decor: 'dots',    iconPath: mdiDrupal },
  'Nuxt.js':    { from: 'from-green-900/25',  icon: 'text-green-400',  bg: 'bg-green-500/10',  decor: 'grid',    iconPath: mdiNuxt },
  'CodeIgniter':{ from: 'from-orange-900/25', icon: 'text-orange-400', bg: 'bg-orange-500/10', decor: 'bars',    iconPath: mdiCodeBraces },
  'REST API':   { from: 'from-violet-900/25', icon: 'text-violet-400', bg: 'bg-violet-500/10', decor: 'code',    iconPath: mdiApi },
  'GraphQL':    { from: 'from-pink-900/25',   icon: 'text-pink-400',   bg: 'bg-pink-500/10',   decor: 'circles', iconPath: mdiGraphql },
  'VtigerCRM':  { from: 'from-amber-900/25',  icon: 'text-amber-400',  bg: 'bg-amber-500/10',  decor: 'bars',    iconPath: mdiAccountBoxMultiple },
}

const defaultTheme: Theme = {
  from: 'from-accent/10',
  icon: 'text-accent',
  bg: 'bg-accent/10',
  decor: 'code',
  iconPath: mdiCodeBraces,
}

const theme = computed<Theme>(() => {
  for (const tech of props.project.tech) {
    if (themeMap[tech]) return themeMap[tech]
  }
  return defaultTheme
})

</script>

<template>
  <div
    :class="[
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
      'bg-vs-surface border border-vs-border',
      'dark:[box-shadow:0_-20px_80px_-20px_rgba(0,122,204,0.06)_inset]',
      'transform-gpu transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5',
      className,
    ]"
  >
    <!-- Background: slot takes priority, otherwise auto-generated -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <slot name="background">
        <!-- Auto-generated background from theme -->
        <div :class="`absolute inset-0 bg-gradient-to-br ${theme.from} via-transparent to-transparent`" />

        <!-- decor: code lines -->
        <template v-if="theme.decor === 'code'">
          <div class="absolute top-4 right-4 font-mono text-[9px] text-vs-muted/15 leading-5 text-right space-y-0.5">
            <div v-for="line in ['const api =', '  fetch(url)', '.then(r =>', '  r.json())']" :key="line">{{ line }}</div>
          </div>
        </template>

        <!-- decor: dots -->
        <template v-else-if="theme.decor === 'dots'">
          <svg class="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dp" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dp)" />
          </svg>
        </template>

        <!-- decor: grid -->
        <template v-else-if="theme.decor === 'grid'">
          <svg class="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gp" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" stroke-width="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gp)" />
          </svg>
        </template>

        <!-- decor: bars -->
        <template v-else-if="theme.decor === 'bars'">
          <div class="absolute bottom-20 right-5 flex items-end gap-1.5 opacity-10">
            <div v-for="h in [28,44,32,56,38,60,42,50,34]" :key="h"
              class="w-2.5 rounded-t-sm bg-current"
              :class="theme.icon"
              :style="`height:${h}px`"
            />
          </div>
        </template>

        <!-- decor: lines -->
        <template v-else-if="theme.decor === 'lines'">
          <div class="absolute top-5 right-4 flex flex-col gap-2 opacity-10">
            <div v-for="w in ['w-20','w-14','w-24','w-16','w-20']" :key="w"
              :class="`h-1 rounded-full bg-current ${w} ${theme.icon}`"
            />
          </div>
        </template>

        <!-- decor: circles -->
        <template v-else-if="theme.decor === 'circles'">
          <div class="absolute -top-6 -right-6 w-28 h-28 rounded-full border opacity-[0.06] border-current" :class="theme.icon" />
          <div class="absolute -top-2 -right-2 w-16 h-16 rounded-full border opacity-[0.08] border-current" :class="theme.icon" />
        </template>
      </slot>
    </div>

    <!-- Default content (resting state) -->
    <div class="pointer-events-none z-10 flex flex-col gap-1.5 p-6 mt-auto transition-all duration-300 group-hover:opacity-0">
      <slot name="icon">
        <div :class="`w-9 h-9 rounded-lg ${theme.bg} flex items-center justify-center mb-1`">
          <MdiIcon :path="theme.iconPath" :size="20" :class="theme.icon" />
        </div>
      </slot>

      <h3 :class="[
        'font-semibold text-vs-text leading-snug',
        size === 'wide' ? 'text-base' : 'text-sm',
      ]">
        {{ project.title }}
      </h3>
      <p :class="[
        'text-vs-muted leading-relaxed line-clamp-2',
        size === 'wide' ? 'text-sm' : 'text-xs',
      ]">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-1 mt-1">
        <span
          v-for="tech in project.tech.slice(0, size === 'wide' ? 5 : 3)"
          :key="tech"
          class="px-1.5 py-0.5 bg-vs-sidebar text-vs-muted text-[10px] font-mono rounded border border-vs-border/50"
        >{{ tech }}</span>
      </div>
    </div>

    <!-- Hover overlay: full description -->
    <div
      class="absolute inset-0 z-20 flex flex-col p-6 bg-vs-surface/[0.97] backdrop-blur-sm
             opacity-0 translate-y-3 pointer-events-none
             transition-all duration-300
             group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
             overflow-y-auto"
    >
      <div :class="`w-9 h-9 rounded-lg ${theme.bg} flex items-center justify-center mb-3 flex-shrink-0`">
        <MdiIcon :path="theme.iconPath" :size="20" :class="theme.icon" />
      </div>

      <h3 :class="[
        'font-semibold text-accent leading-snug mb-2 flex-shrink-0',
        size === 'wide' ? 'text-base' : 'text-sm',
      ]">
        {{ project.title }}
      </h3>

      <p :class="[
        'text-vs-muted leading-relaxed flex-shrink-0',
        size === 'wide' ? 'text-sm' : 'text-xs',
      ]">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-1 mt-3 flex-shrink-0">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-1.5 py-0.5 bg-vs-sidebar text-vs-muted text-[10px] font-mono rounded border border-vs-border/50"
        >{{ tech }}</span>
      </div>

      <div class="mt-auto pt-4 flex-shrink-0">
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank" rel="noopener"
          class="inline-flex items-center gap-1 text-xs text-accent hover:underline font-mono"
        >
          View Live <MdiIcon :path="mdiArrowRight" :size="12" />
        </a>
        <span v-else :class="`text-xs font-mono ${theme.icon} opacity-60`">
          {{ project.tech[0] }} project
        </span>
      </div>
    </div>
  </div>
</template>