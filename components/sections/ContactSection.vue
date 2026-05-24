<script setup lang="ts">
import {
  mdiEmail, mdiSend, mdiCheckCircle, mdiAlertCircle,
  mdiLoading, mdiGithub, mdiLinkedin,
} from '@mdi/js'

const contactInfo = [
  { path: mdiEmail, label: 'Email', value: 'arcylen.gg@gmail.com', href: 'mailto:arcylen.gg@gmail.com' },
]

const socialLinks = [
  { path: mdiGithub,   label: 'GitHub',   href: 'https://github.com/arcylen-gg' },
  { path: mdiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arcylen-gutierrez-62708a102' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const status = ref<Status>('idle')
const form = ref({ name: '', email: '', message: '' })

async function handleSubmit() {
  status.value = 'loading'
  try {
    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': '',
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    status.value = res.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}

function reset() {
  form.value = { name: '', email: '', message: '' }
  status.value = 'idle'
}
</script>

<template>
  <section id="contact" class="py-24 bg-vs-sidebar">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">05</span>
          <p class="font-mono text-accent text-sm mb-2">// 05. contact</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Get In Touch</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </div>
      </RevealOnScroll>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left: Info + socials -->
        <RevealOnScroll :delay="100">
          <div>
            <p class="text-vs-muted text-base leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a project in
              mind, a question about my work, or just want to say hi — my inbox is always
              open. I'll get back to you as soon as I can.
            </p>

            <div class="space-y-3 mb-8">
              <a
                v-for="info in contactInfo"
                :key="info.label"
                :href="info.href"
                class="flex items-center gap-4 p-4 bg-vs-surface rounded-lg border border-vs-border hover:border-accent/40 cursor-pointer transition-colors"
              >
                <div class="w-10 h-10 flex items-center justify-center rounded-md bg-accent/10 flex-shrink-0">
                  <MdiIcon :path="info.path" :size="20" class="text-accent" />
                </div>
                <div>
                  <p class="text-vs-muted text-xs font-mono">{{ info.label }}</p>
                  <p class="text-vs-text text-sm">{{ info.value }}</p>
                </div>
              </a>
            </div>

            <!-- Social links -->
            <div class="flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2 bg-vs-surface border border-vs-border rounded-md text-vs-muted hover:text-accent hover:border-accent/40 transition-colors text-sm"
              >
                <MdiIcon :path="social.path" :size="16" />
                {{ social.label }}
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <!-- Right: Form -->
        <RevealOnScroll :delay="200">
          <div>
            <!-- Success state -->
            <div
              v-if="status === 'success'"
              class="h-full flex flex-col items-center justify-center text-center py-12 bg-vs-surface border border-vs-border rounded-lg px-8"
            >
              <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-5">
                <MdiIcon :path="mdiCheckCircle" :size="32" class="text-green-400" />
              </div>
              <h3 class="text-vs-text font-semibold text-lg mb-2">Message sent!</h3>
              <p class="text-vs-muted text-sm mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button @click="reset" class="text-accent text-sm font-mono hover:underline">
                Send another message
              </button>
            </div>

            <!-- Error state -->
            <div
              v-else-if="status === 'error'"
              class="mb-4 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
            >
              <MdiIcon :path="mdiAlertCircle" :size="20" class="text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-red-400 text-sm font-semibold">Something went wrong</p>
                <p class="text-vs-muted text-xs mt-1">Please try again or email me directly at arcylen.gg@gmail.com</p>
              </div>
            </div>

            <!-- Form -->
            <form
              v-if="status !== 'success'"
              name="contact"
              netlify
              class="space-y-4"
              @submit.prevent="handleSubmit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div>
                <label for="name" class="block text-vs-muted text-xs font-mono mb-2">name</label>
                <input id="name" v-model="form.name" type="text" name="name" required placeholder="Your name"
                  class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div>
                <label for="email" class="block text-vs-muted text-xs font-mono mb-2">email</label>
                <input id="email" v-model="form.email" type="email" name="email" required placeholder="your@email.com"
                  class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div>
                <label for="message" class="block text-vs-muted text-xs font-mono mb-2">message</label>
                <textarea id="message" v-model="form.message" name="message" required rows="5" placeholder="Your message..."
                  class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>

              <button
                type="submit"
                :disabled="status === 'loading'"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MdiIcon
                  :path="status === 'loading' ? mdiLoading : mdiSend"
                  :size="16"
                  :class="status === 'loading' ? 'animate-spin' : ''"
                />
                {{ status === 'loading' ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>