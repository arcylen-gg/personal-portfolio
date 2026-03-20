<script setup lang="ts">

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

      <!-- Scroll timeline -->
      <UiScrollTimeline />

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
