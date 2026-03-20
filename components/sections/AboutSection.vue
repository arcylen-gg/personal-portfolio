<script setup lang="ts">
import { mdiMapMarker, mdiBriefcase, mdiCalendar, mdiSchool } from '@mdi/js'

const yoe = useYOE()

const stats = computed(() => [
  { path: mdiMapMarker,  label: 'Location',     value: 'Bocaue, Bulacan, Philippines' },
  { path: mdiBriefcase,  label: 'Current Role',  value: 'Full-Stack Web Developer @ Connect OS' },
  { path: mdiCalendar,   label: 'Experience',    value: yoe.inWebDev },
  { path: mdiSchool,     label: 'Education',     value: 'BS Computer Science' },
])
</script>

<template>
  <section id="about" class="py-24 bg-vs-sidebar">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">01</span>
          <p class="font-mono text-accent text-sm mb-2">// 01. about</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">About Me</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </div>
      </RevealOnScroll>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Bio -->
        <RevealOnScroll :delay="100">
          <div>
            <p class="text-vs-text text-base md:text-lg leading-relaxed mb-5">
              I'm a passionate Full-Stack Web Developer with over {{ yoe.short }} of experience
              building modern, performant web applications. My goal is to create
              innovative web-based tools that help clients succeed in online business.
            </p>
            <p class="text-vs-muted text-base leading-relaxed mb-5">
              Currently at
              <span class="text-accent font-medium">Connect OS</span>, I'm assigned to
              AWD Digital in Australia, delivering tailored development solutions — from
              transforming Figma/XD designs into pixel-perfect websites to deploying
              full-stack applications to production servers.
            </p>
            <p class="text-vs-muted text-base leading-relaxed">
              I've worked across the entire stack: REST APIs, CMS platforms (WordPress,
              OctoberCMS), reactive frontends with Vue.js, and backend systems
              in PHP and JavaScript. I'm also passionate about mentoring aspiring developers
              in the community.
            </p>
          </div>
        </RevealOnScroll>

        <!-- Right: Stats -->
        <div class="grid gap-4">
          <RevealOnScroll
            v-for="(stat, i) in stats"
            :key="stat.label"
            :delay="120 + i * 100"
          >
            <div class="flex items-center gap-4 p-4 bg-vs-surface rounded-lg border border-vs-border border-l-2 border-l-accent/40 hover:border-l-accent hover:bg-vs-sidebar transition-all duration-300 group">
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                <MdiIcon :path="stat.path" :size="20" class="text-accent" />
              </div>
              <div>
                <p class="text-vs-muted text-xs font-mono">{{ stat.label }}</p>
                <p class="text-vs-text text-sm font-medium">{{ stat.value }}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>