<script setup lang="ts">
const experiences = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Connect OS',
    duration: 'Oct 2020 — Present',
    location: 'Remote (AWD Digital, Australia)',
    current: true,
    highlights: [
      'Assigned to AWD Digital (Australia) to deliver tailored development solutions',
      'Created quality websites using WordPress and OctoberCMS in short turnaround times',
      'Implemented REST API projects, coordinating directly with mobile developers',
      'Transformed XD and Figma layout designs into fully functional, pixel-perfect websites',
      'Owned full development lifecycle: from layout to deployment on live servers',
      'Leverage AI tools (Claude, GitHub Copilot, ChatGPT) to accelerate development — from rapid prototyping and debugging to generating boilerplate, reviewing code, and drafting technical documentation — consistently delivering projects faster without sacrificing quality',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Bayview Technologies Inc.',
    duration: 'Feb 2020 — Sep 2020',
    location: 'Makati City',
    current: false,
    highlights: [
      'Implemented front-end logic using JavaScript ES6 for web application visual elements',
      'Developed web solutions in Drupal and Slim Framework within Docker environments',
      'Practiced standard Agile processes and deployed applications to staging and production',
      'Applied Object-Oriented Programming principles across the codebase',
    ],
  },
  {
    role: 'Senior Web Developer',
    company: 'Digima Web Solutions Inc.',
    duration: 'Jun 2016 — Jan 2020',
    location: 'Pandi, Bulacan',
    current: false,
    highlights: [
      'Led the development team as Team Leader, coordinating workgroups to meet company goals',
      'Project leader for an Inventory System with basic accounting built on Laravel + HTML + AJAX',
      'Part-time developer on a Multi-Level Marketing System built with AngularJS and Laravel',
      'Served as both Project Manager and Implementer, providing professional customer service',
    ],
  },
]

const volunteer = {
  role: 'Mentor',
  company: "Programmer's Developers Group (Facebook Community)",
  duration: 'Jan 2019 — Sep 2020',
  highlights: [
    'Mentored aspiring web developers and programmers across various fields of the IT industry',
  ],
}

const aiPractices = [
  { label: 'Rapid Prototyping', detail: 'Use Claude & Copilot to scaffold boilerplate and POCs in minutes' },
  { label: 'Debugging & Root Cause Analysis', detail: 'AI-assisted log analysis and error tracing to resolve issues faster' },
  { label: 'Code Review & Refactoring', detail: 'Get instant second opinions on logic, security, and performance' },
  { label: 'Technical Documentation', detail: 'Generate clear API docs, READMEs, and inline comments efficiently' },
]

const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Immaculate Conception-I College of Arts and Technology',
  duration: 'Jun 2011 — Apr 2016',
}
</script>

<template>
  <section id="experience" class="py-24 bg-vs-bg">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">02</span>
          <p class="font-mono text-accent text-sm mb-2">// 02. experience</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Work Experience</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </div>
      </RevealOnScroll>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line — runs between first and last dot -->
        <div class="absolute left-4 md:left-8 top-6 bottom-6 w-px bg-vs-border" />

        <div class="space-y-10">
          <!-- Work experiences -->
          <RevealOnScroll
            v-for="(exp, i) in experiences"
            :key="exp.company"
            :delay="i * 150"
          >
          <div class="relative pl-12 md:pl-20">
            <!-- Timeline dot -->
            <div
              :class="[
                'absolute left-[10px] md:left-[26px] top-6 w-3 h-3 rounded-full border-2 transition-colors',
                exp.current
                  ? 'bg-accent border-accent shadow-[0_0_10px_rgba(0,122,204,0.5)]'
                  : 'bg-vs-bg border-vs-border',
              ]"
            />

            <!-- Card -->
            <div
              :class="[
                'rounded-lg p-6 transition-all duration-300',
                exp.current
                  ? 'bg-vs-sidebar border border-vs-border border-l-[3px] border-l-accent hover:shadow-lg hover:shadow-accent/5'
                  : 'bg-vs-sidebar border border-vs-border hover:border-accent/30',
              ]"
            >
              <div
                class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5"
              >
                <div>
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 class="text-vs-text font-semibold text-lg">{{ exp.role }}</h3>
                    <span
                      v-if="exp.current"
                      class="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20"
                    >
                      Current
                    </span>
                  </div>
                  <p class="text-accent font-medium mt-0.5">{{ exp.company }}</p>
                </div>
                <div class="md:text-right flex-shrink-0">
                  <p class="text-vs-muted text-sm font-mono">{{ exp.duration }}</p>
                  <p class="text-vs-muted text-xs mt-0.5">{{ exp.location }}</p>
                </div>
              </div>

              <ul class="space-y-2">
                <li
                  v-for="(point, i) in exp.highlights"
                  :key="i"
                  class="flex items-start gap-3 text-vs-muted text-sm"
                >
                  <span class="text-accent mt-0.5 flex-shrink-0 text-xs">▹</span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
          </RevealOnScroll>

          <!-- Volunteer -->
          <RevealOnScroll :delay="450">
          <div class="relative pl-12 md:pl-20">
            <div
              class="absolute left-[10px] md:left-[26px] top-6 w-3 h-3 rounded-full border-2 bg-vs-bg border-vs-border"
            />
            <div
              class="bg-vs-sidebar border border-dashed border-vs-border rounded-lg p-6 hover:border-accent/20 transition-colors"
            >
              <div
                class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4"
              >
                <div>
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 class="text-vs-text font-semibold">{{ volunteer.role }}</h3>
                    <span
                      class="px-2 py-0.5 text-xs font-mono bg-vs-surface text-vs-muted rounded border border-vs-border"
                    >
                      Volunteer
                    </span>
                  </div>
                  <p class="text-vs-muted text-sm mt-0.5">{{ volunteer.company }}</p>
                </div>
                <p class="text-vs-muted text-sm font-mono flex-shrink-0">
                  {{ volunteer.duration }}
                </p>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(point, i) in volunteer.highlights"
                  :key="i"
                  class="flex items-start gap-3 text-vs-muted text-sm"
                >
                  <span class="text-accent mt-0.5 flex-shrink-0 text-xs">▹</span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </div>

      <!-- AI-Assisted Development -->
      <RevealOnScroll :delay="100">
      <div class="mt-14 p-6 bg-vs-sidebar border border-vs-border rounded-lg relative overflow-hidden">
        <!-- subtle accent glow -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent via-accent/40 to-transparent" />
        <div class="flex items-start gap-5">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-2xl">
            🤖
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 flex-wrap mb-3">
              <h3 class="text-vs-text font-semibold text-lg">AI-Assisted Development</h3>
              <span class="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20">
                Daily Practice
              </span>
            </div>
            <p class="text-vs-muted text-sm leading-relaxed mb-4">
              Actively integrate AI tools into my development workflow to ship faster and smarter — not as a shortcut, but as a force multiplier.
            </p>
            <div class="grid sm:grid-cols-2 gap-3">
              <div
                v-for="item in aiPractices"
                :key="item.label"
                class="flex items-start gap-3 bg-vs-surface rounded-lg p-3 border border-vs-border hover:border-accent/30 transition-colors"
              >
                <span class="text-accent flex-shrink-0 mt-0.5 text-xs">▹</span>
                <div>
                  <p class="text-vs-text text-sm font-medium">{{ item.label }}</p>
                  <p class="text-vs-muted text-xs mt-0.5">{{ item.detail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>

      <!-- Education -->
      <RevealOnScroll :delay="100">
      <div class="mt-6 p-6 bg-vs-sidebar border border-vs-border rounded-lg flex items-start gap-5">
        <div
          class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-2xl"
        >
          🎓
        </div>
        <div>
          <h3 class="text-vs-text font-semibold text-lg">{{ education.degree }}</h3>
          <p class="text-accent font-medium text-sm mt-0.5">{{ education.school }}</p>
          <p class="text-vs-muted text-sm font-mono mt-1">{{ education.duration }}</p>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
