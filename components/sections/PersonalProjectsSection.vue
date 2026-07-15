<script setup lang="ts">
import {
  mdiOpenInNew,
  mdiFirebase,
  mdiNuxt,
  mdiCreditCardOutline,
  mdiFlower,
  mdiLanguagePython,
  mdiMicrosoftWindows,
  mdiShieldKeyOutline,
  mdiPowerSleep,
  mdiDownload,
} from '@mdi/js'

interface IconBadge {
  path: string
  color: string
  bg: string
  title: string
}

interface PersonalProject {
  title: string
  description: string
  tech: string[]
  url?: string
  github?: string
  image?: string
  downloadUrl?: string
  downloadLabel?: string
  highlights: string[]
  approach?: string
  status?: string
  iconBadges: IconBadge[]
  placeholderIcon: string
}

const personalProjects: PersonalProject[] = [
  {
    title: 'QuoteFlower',
    description:
      'A multi-tenant SaaS platform that lets freelancers and small businesses create itemised quotes, convert them to invoices with one click, and accept payments online via Stripe Connect and PayPal, all with branded PDF exports, email delivery, and team collaboration.',
    tech: ['Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe', 'PayPal'],
    url: 'https://quoteflower.app/',
    image: '/quoteflower.png',
    placeholderIcon: mdiFlower,
    highlights: [
      'Multi-tenant SaaS with team collaboration',
      'Stripe Connect & PayPal payment acceptance',
      'Branded PDF exports & email delivery',
    ],
    iconBadges: [
      { path: mdiNuxt, color: 'text-green-400', bg: 'bg-green-500/10', title: 'Nuxt.js' },
      { path: mdiFirebase, color: 'text-amber-400', bg: 'bg-amber-500/10', title: 'Firebase' },
      { path: mdiCreditCardOutline, color: 'text-violet-400', bg: 'bg-violet-500/10', title: 'Stripe & PayPal' },
    ],
  },
  {
    title: 'Snoozer',
    description:
      'A Windows tray utility that auto-shuts down your PC after idle inactivity, backed by a full commercial licensing system. Monitors keyboard, mouse, and audio output via the Core Audio peak meter, so active playback (calls, Spotify, games, even paused-but-unmuted tabs) keeps the timer at zero. When idle, it pops a small countdown window with a Cancel-shutdown button before issuing a forced shutdown.',
    tech: ['Python 3.12', 'PyQt6', 'pywin32', 'pycaw', 'cryptography (Ed25519)', 'PyInstaller', 'Inno Setup 6'],
    placeholderIcon: mdiPowerSleep,
    status: 'Production-ready · Sold commercially',
    downloadUrl: '/snoozer/installer/Snoozer-Setup-1.1.0.exe',
    downloadLabel: 'Download for Windows',
    image: '/snoozer-ai-gen.png',
    highlights: [
      'Audio-aware idle detection via Windows Core Audio peak meter',
      'Ed25519-signed licensing with offline signature verify + remote revocation polling and 30-day grace window',
      '14-day trial state, paste-to-activate licensing, distributable as a signed Inno Setup installer',
    ],
    approach:
      'Built through AI-augmented development. I owned every product decision (what counts as activity, when to require internet vs. trust local state, how to handle license revocation without bricking paying customers) and pair-programmed with an AI assistant to write the Python. Started without prior Python experience; shipped a production-ready Windows product. Along the way I debugged silent process deaths from PyQt6 garbage-collecting a wrapper object, a breaking change in the pycaw library between versions, BOM characters corrupting license keys pasted from email clients, and Windows 11 burying new tray icons in the overflow flyout.',
    iconBadges: [
      { path: mdiLanguagePython, color: 'text-yellow-400', bg: 'bg-yellow-500/10', title: 'Python' },
      { path: mdiMicrosoftWindows, color: 'text-sky-400', bg: 'bg-sky-500/10', title: 'Windows' },
      { path: mdiShieldKeyOutline, color: 'text-emerald-400', bg: 'bg-emerald-500/10', title: 'Ed25519 Licensing' },
    ],
  },
]
</script>

<template>
  <section id="personal-projects" class="py-16 bg-vs-bg">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">/</span>
          <p class="font-mono text-accent text-sm mb-2">// ~/personal-projects</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Personal Projects</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
          <p class="mt-4 text-vs-muted text-sm max-w-xl">
            Side projects I build to explore ideas, learn new tech, and ship products end-to-end.
          </p>
        </div>
      </RevealOnScroll>

      <!-- Featured personal project cards -->
      <div class="space-y-10">
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
                    <MdiIcon :path="project.placeholderIcon" :size="40" class="text-accent" />
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
                <div
                  v-for="badge in project.iconBadges"
                  :key="badge.title"
                  :class="['w-9 h-9 rounded-lg flex items-center justify-center', badge.bg]"
                  :title="badge.title"
                >
                  <MdiIcon :path="badge.path" :size="20" :class="badge.color" />
                </div>
              </div>

              <!-- Title + optional status pill -->
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <h3 class="text-2xl font-bold text-vs-text group-hover:text-accent transition-colors">
                  {{ project.title }}
                </h3>
                <span
                  v-if="project.status"
                  class="px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-mono rounded-full border border-accent/20"
                >
                  {{ project.status }}
                </span>
              </div>

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

              <!-- Engineering approach -->
              <div
                v-if="project.approach"
                class="mb-6 p-5 rounded-xl bg-vs-sidebar/60 border border-vs-border/60"
              >
                <p class="font-mono text-accent text-xs mb-2">// engineering approach</p>
                <p class="text-vs-muted text-sm leading-relaxed">{{ project.approach }}</p>
              </div>

              <!-- Tech badges -->
              <div class="flex flex-wrap gap-1.5 mb-6">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2 py-1 bg-vs-sidebar text-vs-muted text-[11px] font-mono rounded border border-vs-border/50"
                >{{ tech }}</span>
              </div>

              <!-- CTA -->
              <div v-if="project.url || project.downloadUrl" class="flex flex-wrap items-center gap-3">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent text-sm font-mono rounded-lg border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
                >
                  Visit App <MdiIcon :path="mdiOpenInNew" :size="14" />
                </a>
                <a
                  v-if="project.downloadUrl"
                  :href="project.downloadUrl"
                  download
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-mono rounded-lg border border-accent hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
                >
                  <MdiIcon :path="mdiDownload" :size="14" />
                  {{ project.downloadLabel || 'Download' }}
                </a>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>

    </div>
  </section>
</template>
