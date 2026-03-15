<script setup lang="ts">
import { Mail, ArrowDown, ExternalLink } from 'lucide-vue-next'

const yoe = useYOE()

const roles = [
  'Full-Stack Web Developer',
  'Laravel Developer',
  'Vue.js Engineer',
  'WordPress Expert',
]

const currentRole = ref(roles[0])
const roleIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
    currentRole.value = roles[roleIndex.value]
  }, 1500)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden bg-vs-bg"
  >
    <!-- Grid background -->
    <div
      class="absolute inset-0 bg-[linear-gradient(rgba(0,122,204,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,204,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"
    />

    <!-- Radial glow (left-center on large, center on small) -->
    <div
      class="absolute top-1/2 left-1/4 xl:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-3xl pointer-events-none"
    />

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
      <div class="grid xl:grid-cols-2 xl:items-center xl:gap-16">

        <!-- Left: Main content -->
        <div class="text-center xl:text-left">
          <!-- Greeting -->
          <p class="font-mono text-accent text-sm md:text-base mb-4 animate-fade-in">
            &gt; Hello, World! I'm
          </p>

          <!-- Name with gradient -->
          <h1
            class="text-5xl md:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in-up leading-tight"
          >
            <span class="text-vs-text">Arcylen</span><br />
            <span
              class="bg-gradient-to-r from-accent via-[#00a8e8] to-[#00d4ff] bg-clip-text text-transparent"
            >
              Gutierrez
            </span>
          </h1>

          <!-- Rotating role with cursor -->
          <div class="h-10 flex items-center justify-center xl:justify-start mb-6">
            <p class="text-xl md:text-2xl font-mono text-vs-muted">
              <span class="text-vs-text">{{ currentRole }}</span
              ><span class="animate-blink text-accent">|</span>
            </p>
          </div>

          <!-- Tagline -->
          <p
            class="max-w-xl mx-auto xl:mx-0 text-vs-muted text-base md:text-lg mb-10 leading-relaxed"
          >
            Building innovative web-based tools and solutions that help clients succeed
            in the digital world.
            <span class="text-vs-text font-medium">{{ yoe.prose }}</span> of full-stack
            experience across Laravel, Vue.js, WordPress, and more.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-4 justify-center xl:justify-start mb-12">
            <a
              href="/#projects"
              class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
            >
              View My Work
              <ExternalLink class="w-4 h-4" />
            </a>
            <a
              href="/#contact"
              class="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-md transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          <!-- Social links -->
          <div class="flex items-center justify-center xl:justify-start gap-8">
            <a
              href="https://github.com/arcylen-gg"
              target="_blank"
              rel="noopener"
              class="text-vs-muted hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="GitHub"
            >
              <IconsIconGithub class="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arcylen-gutierrez-62708a102"
              target="_blank"
              rel="noopener"
              class="text-vs-muted hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <IconsIconLinkedin class="w-6 h-6" />
            </a>
            <a
              href="mailto:arcylen.gg@gmail.com"
              class="text-vs-muted hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Right: Terminal window -->
        <div class="flex justify-center xl:justify-end mt-12 xl:mt-0">
          <div
            class="w-full max-w-md bg-vs-sidebar border border-vs-border rounded-xl overflow-hidden shadow-2xl shadow-black/50"
          >
            <!-- Window chrome -->
            <div
              class="flex items-center gap-2 px-4 py-3 bg-vs-surface border-b border-vs-border"
            >
              <div class="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div class="w-3 h-3 rounded-full bg-[#28c840]" />
              <span class="ml-3 text-vs-muted text-xs font-mono flex-1 text-center">
                arcylen@portfolio — zsh
              </span>
            </div>

            <!-- Terminal body -->
            <div class="p-5 font-mono text-sm space-y-3">
              <div class="flex gap-2">
                <span class="text-green-400 flex-shrink-0">❯</span>
                <span class="text-vs-muted">whoami</span>
              </div>
              <div class="text-accent pl-6">arcylen-gutierrez</div>

              <div class="flex gap-2">
                <span class="text-green-400 flex-shrink-0">❯</span>
                <span class="text-vs-muted">cat experience.txt</span>
              </div>
              <div class="text-vs-text pl-6">{{ yoe.display }} · Full-Stack Web Dev</div>

              <div class="flex gap-2">
                <span class="text-green-400 flex-shrink-0">❯</span>
                <span class="text-vs-muted">ls ./skills</span>
              </div>
              <div class="pl-6 flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                <span class="text-[#569cd6]">Laravel</span>
                <span class="text-[#4ec9b0]">Vue.js</span>
                <span class="text-[#569cd6]">Nuxt.js</span>
                <span class="text-[#ce9178]">PHP</span>
                <span class="text-[#4ec9b0]">React.js</span>
                <span class="text-[#ce9178]">WordPress</span>
                <span class="text-[#b5cea8]">MySQL</span>
                <span class="text-[#569cd6]">Prisma</span>
                <span class="text-[#b5cea8]">Docker</span>
                <span class="text-[#4ec9b0]">OctoberCMS</span>
              </div>

              <div class="flex gap-2">
                <span class="text-green-400 flex-shrink-0">❯</span>
                <span class="text-vs-muted">git log --oneline -1</span>
              </div>
              <div class="pl-6 text-vs-muted text-xs">
                <span class="text-yellow-400">a7f3c2e</span>
                &nbsp;Building the future, one commit at a time
              </div>

              <div class="flex gap-2 items-center pt-1">
                <span class="text-green-400 flex-shrink-0">❯</span>
                <span
                  class="inline-block w-2 h-[14px] bg-accent animate-blink"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-vs-muted animate-bounce"
    >
      <ArrowDown class="w-5 h-5" />
    </div>
  </section>
</template>
