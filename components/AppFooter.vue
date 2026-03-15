<template>
  <footer class="bg-vs-sidebar border-t border-vs-border py-10 mt-20">
    <div
      class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="Arcylen Gutierrez" class="h-8 w-auto" />
      </NuxtLink>

      <p class="text-vs-muted text-sm text-center mx-auto">
        © {{ new Date().getFullYear() }} Arcylen Gutierrez. Built with
        <a
          href="https://nuxt.com"
          target="_blank"
          rel="noopener"
          class="text-accent hover:underline"
          >Nuxt</a
        >
        &amp;
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener"
          class="text-accent hover:underline"
          >Tailwind CSS</a
        >.
      </p>

      <div class="hidden flex items-center gap-6">
        <a
          href="https://github.com/arcylen-gg"
          target="_blank"
          rel="noopener"
          class="text-vs-muted hover:text-accent transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/arcylen-gutierrez-62708a102"
          target="_blank"
          rel="noopener"
          class="text-vs-muted hover:text-accent transition-colors text-sm"
        >
          LinkedIn
        </a>
        <a
          href="mailto:arcylen.gg@gmail.com"
          class="text-vs-muted hover:text-accent transition-colors text-sm"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
