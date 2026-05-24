<script setup lang="ts">
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SI = 'https://cdn.simpleicons.org'

const skillGroups = [
  {
    category: 'Frontend',
    comment: '// UI & reactive frameworks',
    skills: [
      { name: 'Vue.js',                    icon: `${DI}/vuejs/vuejs-original.svg` },
      { name: 'Nuxt.js (Composition API)', icon: `${DI}/nuxtjs/nuxtjs-original.svg` },
      { name: 'React.js',                  icon: `${DI}/react/react-original.svg` },
      { name: 'Next.js',                   icon: `${SI}/nextdotjs/ffffff` },
      { name: 'JavaScript (ES6+)',          icon: `${DI}/javascript/javascript-original.svg` },
      { name: 'jQuery',                    icon: `${DI}/jquery/jquery-original.svg` },
      { name: 'Quasar',                    icon: `${SI}/quasar/1976D2` },
      { name: 'Vuetify',                   icon: `${DI}/vuetify/vuetify-original.svg` },
      { name: 'HTML',                      icon: `${DI}/html5/html5-original.svg` },
      { name: 'CSS / SCSS / LESS',         icon: `${DI}/css3/css3-original.svg` },
      { name: 'Axios',                     icon: `${SI}/axios/5A29E4` },
    ],
  },
  {
    category: 'Backend',
    comment: '// server-side & CMS',
    skills: [
      { name: 'PHP',            icon: `${DI}/php/php-original.svg` },
      { name: 'Laravel',        icon: `${DI}/laravel/laravel-original.svg` },
      { name: 'CodeIgniter',    icon: `${DI}/codeigniter/codeigniter-plain.svg` },
      { name: 'OctoberCMS',     icon: null },
      { name: 'WordPress',      icon: `${DI}/wordpress/wordpress-original.svg` },
      { name: 'Drupal',         icon: `${DI}/drupal/drupal-original.svg` },
      { name: 'Slim Framework', icon: null },
    ],
  },
  {
    category: 'Data & APIs',
    comment: '// data layer',
    skills: [
      { name: 'MySQL',     icon: `${DI}/mysql/mysql-original.svg` },
      { name: 'Prisma ORM', icon: `${SI}/prisma/ffffff` },
      { name: 'REST API',  icon: null },
      { name: 'AJAX',      icon: null },
    ],
  },
  {
    category: 'Tools & DevOps',
    comment: '// workflow & infrastructure',
    skills: [
      { name: 'Git',    icon: `${DI}/git/git-original.svg` },
      { name: 'Linux',  icon: `${DI}/linux/linux-original.svg` },
      { name: 'Docker', icon: `${DI}/docker/docker-original.svg` },
      { name: 'Figma',  icon: `${DI}/figma/figma-original.svg` },
    ],
  },
]
</script>

<template>
  <section id="skills" class="py-24 bg-vs-bg">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <RevealOnScroll>
        <div class="relative mb-16">
          <span class="absolute right-0 -top-6 text-[110px] font-black font-mono leading-none text-vs-text/[0.04] select-none pointer-events-none">04</span>
          <p class="font-mono text-accent text-sm mb-2">// 04. skills</p>
          <h2 class="text-3xl md:text-4xl font-bold text-vs-text">Skills & Stack</h2>
          <div class="mt-3 w-20 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </div>
      </RevealOnScroll>

      <div class="grid sm:grid-cols-2 gap-6">
        <RevealOnScroll
          v-for="(group, i) in skillGroups"
          :key="group.category"
          :delay="i * 100"
        >
        <div
          class="bg-vs-sidebar border border-vs-border rounded-lg p-6 hover:border-accent/30 transition-colors h-full"
        >
          <p class="font-mono text-vs-muted text-xs mb-1">{{ group.comment }}</p>
          <h3 class="text-vs-text font-semibold text-sm mb-4">{{ group.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <UiSkillBadge
              v-for="skill in group.skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
            />
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
