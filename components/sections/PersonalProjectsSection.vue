<script setup lang="ts">
import {
  mdiOpenInNew,
  mdiFirebase,
  mdiNuxt,
  mdiCreditCardOutline,
  mdiFlower,
} from '@mdi/js'

interface PersonalProject {
  title: string
  description: string
  tech: string[]
  url?: string
  github?: string
  image?: string
  highlights: string[]
}

const personalProjects: PersonalProject[] = [
  {
    title: 'QuoteFlower',
    description:
      'A multi-tenant SaaS platform that lets freelancers and small businesses create itemised quotes, convert them to invoices with one click, and accept payments online via Stripe Connect and PayPal — all with branded PDF exports, email delivery, and team collaboration.',
    tech: ['Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe', 'PayPal'],
    url: 'https://quoteflower.app/',
    image: '/quoteflower.png',
    highlights: [
      'Multi-tenant SaaS with team collaboration',
      'Stripe Connect & PayPal payment acceptance',
      'Branded PDF exports & email delivery',
    ],
  },
]
</script>

<template>
  <section id="personal-projects" class="py-24 bg-vs-bg">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">04</span>
          <p class="font-mono text-accent text-sm mb-2">// 04. personal</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Personal Projects</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
          <p class="mt-4 text-vs-muted text-sm max-w-xl">
            Side projects I build to explore ideas, learn new tech, and ship products end-to-end.
          </p>
        </div>
      </RevealOnScroll>

      <!-- Featured personal project card -->
      <RevealOnScroll v-for="project in personalProjects" :key="project.title">
        <div class="group relative overflow-hidden rounded-2xl border border-vs-border bg-vs-surface transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">

          <!-- Image / screenshot area (top) -->
          <div class="relative aspect-[16/7] overflow-hidden bg-vs-sidebar">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Placeholder when no image yet -->
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div class="relative">
                <div class="absolute -inset-8 rounded-full border border-accent/10 animate-pulse" />
                <div class="absolute -inset-16 rounded-full border border-accent/5" />
                <div class="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <MdiIcon :path="mdiFlower" :size="40" class="text-accent" />
                </div>
              </div>
              <span class="text-xs font-mono text-vs-muted/60">Screenshot coming soon</span>
            </div>
            <!-- Bottom gradient fade -->
            <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-vs-surface to-transparent" />
          </div>

          <!-- Info panel (bottom) -->
          <div class="relative p-8 lg:p-10">

            <!-- Tech icon badges -->
            <div class="flex items-center gap-3 mb-5">
              <div class="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center" title="Nuxt.js">
                <MdiIcon :path="mdiNuxt" :size="20" class="text-green-400" />
              </div>
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center" title="Firebase">
                <MdiIcon :path="mdiFirebase" :size="20" class="text-amber-400" />
              </div>
              <div class="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center" title="Stripe & PayPal">
                <MdiIcon :path="mdiCreditCardOutline" :size="20" class="text-violet-400" />
              </div>
            </div>

            <h3 class="text-2xl font-bold text-vs-text mb-3 group-hover:text-accent transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-vs-muted text-sm leading-relaxed mb-6">
              {{ project.description }}
            </p>

            <!-- Highlights -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="highlight in project.highlights"
                :key="highlight"
                class="flex items-start gap-2 text-sm text-vs-muted"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {{ highlight }}
              </li>
            </ul>

            <!-- Tech badges -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 bg-vs-sidebar text-vs-muted text-[11px] font-mono rounded border border-vs-border/50"
              >{{ tech }}</span>
            </div>

            <!-- CTA -->
            <div class="flex items-center gap-4">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent text-sm font-mono rounded-lg border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
              >
                Visit App <MdiIcon :path="mdiOpenInNew" :size="14" />
              </a>
            </div>
          </div>

        </div>
      </RevealOnScroll>

    </div>
  </section>
</template>