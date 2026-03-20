<script setup lang="ts">
import { mdiMenu, mdiClose } from '@mdi/js'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  // { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const closeMenu = () => { isMenuOpen.value = false }
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-vs-sidebar/95 backdrop-blur-md border-b border-vs-border shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="Arcylen Gutierrez" class="h-9 w-auto" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <template v-for="link in navLinks" :key="link.label">
          <NuxtLink
            v-if="link.href.startsWith('/')"
            :to="link.href"
            class="relative text-vs-muted hover:text-vs-text text-sm transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            v-else
            :href="link.href"
            class="relative text-vs-muted hover:text-vs-text text-sm transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </a>
        </template>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-md text-vs-muted hover:text-vs-text hover:bg-vs-surface transition-colors"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <MdiIcon :path="isMenuOpen ? mdiClose : mdiMenu" :size="20" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-vs-sidebar border-b border-vs-border">
        <nav class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          <template v-for="link in navLinks" :key="link.label">
            <NuxtLink
              v-if="link.href.startsWith('/')"
              :to="link.href"
              class="text-vs-muted hover:text-vs-text text-sm py-2 px-3 rounded-md hover:bg-vs-surface transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              v-else
              :href="link.href"
              class="text-vs-muted hover:text-vs-text text-sm py-2 px-3 rounded-md hover:bg-vs-surface transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </template>
        </nav>
      </div>
    </Transition>
  </header>
</template>