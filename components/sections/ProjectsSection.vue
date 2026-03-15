<script setup lang="ts">
const { data: allProjects } = await useAsyncData('projects', () =>
  queryContent('projects').sort({ order: 1 }).find(),
)

const showAll = ref(false)

const featured = computed(() =>
  (allProjects.value ?? []).filter((p: any) => p.featured).sort((a: any, b: any) => a.order - b.order),
)

const displayed = computed(() =>
  showAll.value
    ? (allProjects.value ?? []).sort((a: any, b: any) => a.order - b.order)
    : featured.value,
)
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
            A selection of {{ allProjects?.length ?? 0 }} projects delivered across healthcare, real estate, e-commerce, fintech, and more.
          </p>
        </div>
      </RevealOnScroll>

      <!-- Projects grid -->
      <div v-if="displayed.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RevealOnScroll
          v-for="(project, i) in displayed"
          :key="project._path"
          :delay="(i % 6) * 80"
        >
          <UiProjectCard :project="(project as any)" />
        </RevealOnScroll>
      </div>

      <!-- Toggle button -->
      <RevealOnScroll v-if="allProjects?.length" :delay="100">
        <div class="mt-12 flex justify-center">
          <button
            @click="showAll = !showAll"
            class="group flex items-center gap-2 px-6 py-3 border border-vs-border rounded-lg text-vs-muted text-sm font-mono hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            <span>{{ showAll ? '← Show featured only' : `View all ${allProjects?.length} projects` }}</span>
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
