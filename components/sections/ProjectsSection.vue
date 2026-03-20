<script setup lang="ts">
import { projects, featuredProjects } from '~/data/projects'

const showAll = ref(false)

// Grid positions for featured bento layout (3-col, 3-row)
const bentoLayout = [
  'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2', // wide top-left
  'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3', // tall right
  'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3', // normal
  'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3', // normal
  'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4', // normal
  'lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4', // wide bottom-right
]
</script>

<template>
  <section id="projects" class="py-24 bg-vs-sidebar">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">03</span>
          <p class="font-mono text-accent text-sm mb-2">// 03. projects</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Projects & Client Work</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
          <p class="mt-4 text-vs-muted text-sm max-w-xl">
            {{ projects.length }} projects delivered across healthcare, real estate, e-commerce, fintech, and more.
          </p>
        </div>
      </RevealOnScroll>

      <!-- ── Bento grid (featured) ── -->
      <RevealOnScroll v-if="!showAll">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-rows-3 gap-4 auto-rows-[18rem]">

          <!-- 0: Ecommerce POS — wide top-left -->
          <UiBentoCard
            :project="featuredProjects[0]"
            :class="bentoLayout[0]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent" />
              <!-- floating code lines -->
              <div class="absolute top-4 right-4 font-mono text-[10px] text-vs-muted/20 leading-5 text-right">
                <div>GET /api/products</div>
                <div>POST /api/orders</div>
                <div>PUT /api/cart/:id</div>
                <div>DELETE /api/item</div>
              </div>
              <div class="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              </div>
            </template>
          </UiBentoCard>

          <!-- 1: Industrial Safety — tall right -->
          <UiBentoCard
            :project="featuredProjects[5]"
            :class="bentoLayout[1]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-b from-yellow-900/20 via-transparent to-transparent" />
              <!-- dot grid pattern -->
              <svg class="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" class="text-vs-text" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots1)" />
              </svg>
              <div class="absolute top-6 left-6 right-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full bg-yellow-400/40" />
                  <div class="h-1.5 w-16 bg-vs-border/40 rounded" />
                </div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full bg-green-400/40" />
                  <div class="h-1.5 w-24 bg-vs-border/40 rounded" />
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-red-400/40" />
                  <div class="h-1.5 w-12 bg-vs-border/40 rounded" />
                </div>
              </div>
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
            </template>
          </UiBentoCard>

          <!-- 2: Gambling Platform — normal -->
          <UiBentoCard
            :project="featuredProjects[1]"
            :class="bentoLayout[2]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent" />
              <div class="absolute top-3 right-3 font-mono text-[9px] text-vs-muted/15 leading-4">
                <div>module.exports</div>
                <div>const app =</div>
                <div>  express()</div>
              </div>
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>
              </div>
            </template>
          </UiBentoCard>

          <!-- 3: Fire Safety Audit — normal -->
          <UiBentoCard
            :project="featuredProjects[2]"
            :class="bentoLayout[3]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />
              <svg class="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" class="text-vs-text" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid1)" />
              </svg>
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
              </div>
            </template>
          </UiBentoCard>

          <!-- 4: Multilingual Patient Tool — normal -->
          <UiBentoCard
            :project="featuredProjects[3]"
            :class="bentoLayout[4]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent" />
              <div class="absolute top-4 right-4 flex flex-col gap-1.5 opacity-20">
                <div class="flex gap-1">
                  <div class="w-8 h-1.5 bg-teal-400 rounded-full" />
                  <div class="w-4 h-1.5 bg-teal-400/60 rounded-full" />
                </div>
                <div class="flex gap-1">
                  <div class="w-5 h-1.5 bg-teal-400/60 rounded-full" />
                  <div class="w-7 h-1.5 bg-teal-400 rounded-full" />
                </div>
                <div class="flex gap-1">
                  <div class="w-6 h-1.5 bg-teal-400/40 rounded-full" />
                  <div class="w-3 h-1.5 bg-teal-400/60 rounded-full" />
                </div>
              </div>
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>
              </div>
            </template>
          </UiBentoCard>

          <!-- 5: Crypto Account Tool — wide bottom-right -->
          <UiBentoCard
            :project="featuredProjects[4]"
            :class="bentoLayout[5]"
          >
            <template #background>
              <div class="absolute inset-0 bg-gradient-to-bl from-cyan-900/20 via-transparent to-transparent" />
              <!-- chart bars decoration -->
              <div class="absolute bottom-20 right-6 flex items-end gap-1.5 opacity-15">
                <div class="w-3 bg-cyan-400 rounded-t" style="height:28px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:44px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:36px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:56px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:40px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:64px" />
                <div class="w-3 bg-cyan-400 rounded-t" style="height:48px" />
              </div>
              <div class="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </template>
            <template #icon>
              <div class="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-1">
                <svg class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
              </div>
            </template>
          </UiBentoCard>

        </div>
      </RevealOnScroll>

      <!-- ── Bento grid (all projects) ── -->
      <!-- Pattern [wide=2, normal=1, normal=1, wide=2] fills 3 cols per 2 rows -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[17rem]">
        <UiBentoCard
          v-for="(project, i) in projects"
          :key="project.title"
          :project="project"
          :size="i % 4 === 0 || i % 4 === 3 ? 'wide' : 'normal'"
          :class="i % 4 === 0 || i % 4 === 3 ? 'md:col-span-2' : 'md:col-span-1'"
        />
      </div>

      <!-- Toggle -->
      <RevealOnScroll :delay="100">
        <div class="mt-10 flex justify-center">
          <button
            @click="showAll = !showAll"
            class="flex items-center gap-2 px-6 py-3 border border-vs-border rounded-lg text-vs-muted text-sm font-mono hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            <span>{{ showAll ? '← Featured only' : `View all ${projects.length} projects` }}</span>
            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="showAll ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </RevealOnScroll>

    </div>
  </section>
</template>