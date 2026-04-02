export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'https://arcylen.gg',
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  ssr: false,
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      },
    },
  },
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      title: 'Arcylen Gutierrez - Full-Stack Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Arcylen Gutierrez, a Full-Stack Web Developer specializing in Laravel, WordPress, Vue.js, OctoberCMS, and REST APIs.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://arcylen.gg' },
        { property: 'og:title', content: 'Arcylen Gutierrez — Full-Stack Web Developer' },
        {
          property: 'og:description',
          content:
            'Portfolio of Arcylen Gutierrez, a Full-Stack Web Developer specializing in Laravel, WordPress, Vue.js, OctoberCMS, and REST APIs.',
        },
        { property: 'og:image', content: 'https://arcylen.gg/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arcylen Gutierrez — Full-Stack Web Developer' },
        {
          name: 'twitter:description',
          content:
            'Portfolio of Arcylen Gutierrez, a Full-Stack Web Developer specializing in Laravel, WordPress, Vue.js, OctoberCMS, and REST APIs.',
        },
        { name: 'twitter:image', content: 'https://arcylen.gg/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2025-01-01',
})
