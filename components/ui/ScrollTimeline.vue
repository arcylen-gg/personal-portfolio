<script setup lang="ts">
interface ExperienceEntry {
  title: string
  role: string
  company: string
  location?: string
  current?: boolean
  highlights: string[]
  badge?: string
}

const timelineData: ExperienceEntry[] = [
  {
    title: 'Oct 2020 — Present',
    role: 'Full-Stack Web Developer',
    company: 'Connect OS',
    location: 'Remote · AWD Digital, Australia',
    current: true,
    highlights: [
      'Assigned to AWD Digital (Australia) to deliver tailored development solutions',
      'Built quality websites using WordPress and OctoberCMS on short turnaround timelines',
      'Implemented REST API projects, coordinating directly with mobile developers',
      'Transformed XD and Figma designs into pixel-perfect, fully functional websites',
      'Owned full development lifecycle: from layout to deployment on live servers',
      'Leverage AI tools (Claude, GitHub Copilot, ChatGPT) daily — rapid prototyping, debugging, code review, and documentation — consistently shipping faster without sacrificing quality',
    ],
  },
  {
    title: 'Feb 2020 — Sep 2020',
    role: 'Software Engineer',
    company: 'Bayview Technologies Inc.',
    location: 'Makati City',
    highlights: [
      'Implemented front-end logic using JavaScript ES6 for web application visual elements',
      'Developed web solutions in Drupal and Slim Framework within Docker environments',
      'Practiced Agile processes and deployed applications to staging and production servers',
      'Applied Object-Oriented Programming principles consistently across the codebase',
    ],
  },
  {
    title: 'Jun 2016 — Jan 2020',
    role: 'Senior Web Developer',
    company: 'Digima Web Solutions Inc.',
    location: 'Pandi, Bulacan',
    highlights: [
      'Led the development team as Team Leader, coordinating workgroups to meet company goals',
      'Project leader for an Inventory System with basic accounting built on Laravel + HTML + AJAX',
      'Part-time developer on a Multi-Level Marketing System built with AngularJS and Laravel',
      'Served as both Project Manager and Implementer, providing professional customer service',
    ],
  },
  {
    title: 'Jan 2019 — Sep 2020',
    role: 'Mentor',
    company: "Programmer's Developers Group",
    location: 'Facebook Community · Volunteer',
    badge: 'Volunteer',
    highlights: [
      'Mentored aspiring web developers and programmers across various fields of the IT industry',
      'Helped beginners navigate career paths in web development and software engineering',
    ],
  },
  {
    title: 'Jun 2011 — Apr 2016',
    role: 'Bachelor of Science in Computer Science',
    company: 'Immaculate Conception-I College of Arts and Technology',
    badge: 'Education',
    highlights: [
      'Studied algorithms, data structures, software engineering, and computer architecture',
      'Built the foundation that drives every project and technology decision today',
    ],
  },
]

const containerRef = ref<HTMLDivElement | null>(null)
const innerRef = ref<HTMLDivElement | null>(null)
const totalHeight = ref(0)
const lineHeight = ref(0)
const lineOpacity = ref(0)

function updateProgress() {
  if (!containerRef.value || !innerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const winH = window.innerHeight
  // mirror framer-motion offset: ["start 10%", "end 50%"]
  const start = -(rect.top - winH * 0.9)
  const end = -(rect.top - winH * 0.9) + (rect.height - winH * 0.4)
  const progress = Math.max(0, Math.min(1, start / end))
  lineHeight.value = progress * totalHeight.value
  lineOpacity.value = Math.min(1, progress / 0.05)
}

onMounted(() => {
  if (innerRef.value) {
    totalHeight.value = innerRef.value.getBoundingClientRect().height
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div ref="containerRef" class="w-full">
    <div ref="innerRef" class="relative pb-10">
      <!-- Timeline entries -->
      <div
        v-for="(item, index) in timelineData"
        :key="index"
        class="flex justify-start pt-10 md:pt-24 md:gap-10"
      >
        <!-- Left: sticky title + dot -->
        <div class="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full shrink-0">
          <!-- Dot -->
          <div class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-vs-bg flex items-center justify-center">
            <div
              :class="[
                'h-4 w-4 rounded-full border-2 p-1.5 transition-colors',
                item.current
                  ? 'bg-accent border-accent shadow-[0_0_8px_rgba(0,122,204,0.6)]'
                  : 'bg-vs-surface border-vs-border',
              ]"
            />
          </div>
          <!-- Date label (desktop) -->
          <p class="hidden md:block text-sm md:pl-20 font-mono text-vs-muted leading-snug">
            {{ item.title }}
          </p>
        </div>

        <!-- Right: content -->
        <div class="relative pl-20 pr-4 md:pl-4 w-full">
          <!-- Date label (mobile) -->
          <p class="md:hidden block text-xs font-mono text-vs-muted mb-3">{{ item.title }}</p>

          <!-- Card -->
          <div
            :class="[
              'rounded-lg p-5 border transition-colors',
              item.current
                ? 'bg-vs-sidebar border-vs-border border-l-[3px] border-l-accent'
                : 'bg-vs-sidebar border-vs-border hover:border-accent/20',
            ]"
          >
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <h3 class="text-vs-text font-semibold text-base">{{ item.role }}</h3>
              <span
                v-if="item.current"
                class="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20"
              >Current</span>
              <span
                v-else-if="item.badge"
                class="px-2 py-0.5 text-xs font-mono bg-vs-surface text-vs-muted rounded border border-vs-border"
              >{{ item.badge }}</span>
            </div>
            <p class="text-accent text-sm font-medium mb-0.5">{{ item.company }}</p>
            <p v-if="item.location" class="text-vs-muted text-xs font-mono mb-4">{{ item.location }}</p>
            <ul class="space-y-1.5">
              <li
                v-for="(point, i) in item.highlights"
                :key="i"
                class="flex items-start gap-2.5 text-vs-muted text-sm"
              >
                <span class="text-accent mt-0.5 shrink-0 text-xs">▹</span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Vertical line track -->
      <div
        class="absolute md:left-8 left-8 top-0 w-[2px] overflow-hidden"
        :style="{ height: totalHeight + 'px' }"
        style="background: linear-gradient(to bottom, transparent 0%, var(--color-vs-border, #3e3e42) 10%, var(--color-vs-border, #3e3e42) 90%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);"
      >
        <!-- Animated fill -->
        <div
          class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-accent via-blue-400 to-transparent rounded-full transition-none"
          :style="{ height: lineHeight + 'px', opacity: lineOpacity }"
        />
      </div>
    </div>
  </div>
</template>