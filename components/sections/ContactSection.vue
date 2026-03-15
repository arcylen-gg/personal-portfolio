<script setup lang="ts">
import { Mail, Phone, MapPin, Send } from 'lucide-vue-next'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'arcylen.gg@gmail.com',
    href: 'mailto:arcylen.gg@gmail.com',
  },
]

const socialLinks = [
  {
    icon: IconGithub,
    label: 'GitHub',
    href: 'https://github.com/arcylen-gg',
  },
  {
    icon: IconLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arcylen-gutierrez-62708a102',
  },
]
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
            <component
              :is="info.href ? 'a' : 'div'"
              v-for="info in contactInfo"
              :key="info.label"
              :href="info.href ?? undefined"
              :class="[
                'flex items-center gap-4 p-4 bg-vs-surface rounded-lg border border-vs-border transition-colors',
                info.href
                  ? 'hover:border-accent/40 cursor-pointer'
                  : 'cursor-default',
              ]"
            >
              <div
                class="w-10 h-10 flex items-center justify-center rounded-md bg-accent/10 flex-shrink-0"
              >
                <component :is="info.icon" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <p class="text-vs-muted text-xs font-mono">{{ info.label }}</p>
                <p class="text-vs-text text-sm">{{ info.value }}</p>
              </div>
            </component>
          </div>

          <!-- Social links -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-4 py-2 bg-vs-surface border border-vs-border rounded-md text-vs-muted hover:text-accent hover:border-accent/40 transition-colors text-sm"
            >
              <component :is="social.icon" class="w-4 h-4" />
              {{ social.label }}
            </a>
          </div>
        </div>
        </RevealOnScroll>

        <!-- Right: Netlify form -->
        <RevealOnScroll :delay="200">
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div>
              <label for="name" class="block text-vs-muted text-xs font-mono mb-2"
                >name</label
              >
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label for="email" class="block text-vs-muted text-xs font-mono mb-2"
                >email</label
              >
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label for="message" class="block text-vs-muted text-xs font-mono mb-2"
                >message</label
              >
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                class="w-full bg-vs-surface border border-vs-border rounded-md px-4 py-3 text-vs-text text-sm placeholder:text-vs-muted/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              <Send class="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
