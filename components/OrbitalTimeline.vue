<script setup lang="ts">
import {
  mdiBriefcase, mdiCodeBraces, mdiAccountGroup, mdiSchool,
  mdiMonitor, mdiFlash, mdiLink, mdiArrowRight,
} from '@mdi/js'

interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: string
  relatedIds: number[]
  status: 'completed' | 'in-progress' | 'pending'
  energy: number
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Connect OS / AWD Digital',
    date: 'Oct 2020 — Present',
    content: 'Full-Stack Web Developer assigned to AWD Digital (Australia). Delivered WordPress & OctoberCMS sites, REST API integrations, and Figma-to-code builds. Leverage AI tools (Claude, Copilot, ChatGPT) daily to ship faster without sacrificing quality.',
    category: 'Work',
    icon: mdiBriefcase,
    relatedIds: [2, 5],
    status: 'in-progress',
    energy: 100,
  },
  {
    id: 2,
    title: 'Bayview Technologies',
    date: 'Feb 2020 — Sep 2020',
    content: 'Software Engineer building web solutions in Drupal and Slim Framework inside Docker. Implemented ES6 frontend logic, followed Agile sprints, and deployed to staging and production.',
    category: 'Work',
    icon: mdiCodeBraces,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 70,
  },
  {
    id: 3,
    title: 'Digima Web Solutions',
    date: 'Jun 2016 — Jan 2020',
    content: 'Senior Web Developer & Team Leader. Led teams, managed projects, built an Inventory + Accounting System (Laravel), and a Multi-Level Marketing platform (AngularJS + Laravel).',
    category: 'Work',
    icon: mdiMonitor,
    relatedIds: [2, 4, 5],
    status: 'completed',
    energy: 90,
  },
  {
    id: 4,
    title: 'Volunteer Mentor',
    date: 'Jan 2019 — Sep 2020',
    content: "Mentored aspiring web developers in the Programmer's Developers Group (Facebook Community), helping them navigate web development and IT career paths.",
    category: 'Volunteer',
    icon: mdiAccountGroup,
    relatedIds: [3],
    status: 'completed',
    energy: 60,
  },
  {
    id: 5,
    title: 'BS Computer Science',
    date: 'Jun 2011 — Apr 2016',
    content: 'Bachelor of Science in Computer Science at Immaculate Conception-I College of Arts and Technology. Built the foundation in algorithms, data structures, and software engineering.',
    category: 'Education',
    icon: mdiSchool,
    relatedIds: [3],
    status: 'completed',
    energy: 85,
  },
]

const expandedItems = ref<Record<number, boolean>>({})
const rotationAngle = ref(0)
const autoRotate = ref(true)
const pulseEffect = ref<Record<number, boolean>>({})
const activeNodeId = ref<number | null>(null)
const centerOffset = ref({ x: 0, y: 0 })
const containerRef = ref<HTMLDivElement | null>(null)
const orbitRef = ref<HTMLDivElement | null>(null)

let rotationTimer: ReturnType<typeof setInterval> | null = null

function startRotation() {
  rotationTimer = setInterval(() => {
    rotationAngle.value = Number(((rotationAngle.value + 0.3) % 360).toFixed(3))
  }, 50)
}

function stopRotation() {
  if (rotationTimer) { clearInterval(rotationTimer); rotationTimer = null }
}

watch(autoRotate, (val) => { val ? startRotation() : stopRotation() }, { immediate: true })
onUnmounted(() => stopRotation())

const nodePositions = computed(() =>
  timelineData.map((_, index) => {
    const angle = ((index / timelineData.length) * 360 + rotationAngle.value) % 360
    const radius = 180
    const radian = (angle * Math.PI) / 180
    return {
      x: radius * Math.cos(radian) + centerOffset.value.x,
      y: radius * Math.sin(radian) + centerOffset.value.y,
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
      opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))),
    }
  }),
)

function handleContainerClick(e: MouseEvent) {
  if (e.target === containerRef.value || e.target === orbitRef.value) {
    expandedItems.value = {}
    activeNodeId.value = null
    pulseEffect.value = {}
    autoRotate.value = true
  }
}

function toggleItem(id: number) {
  const wasExpanded = expandedItems.value[id]
  expandedItems.value = {}
  if (!wasExpanded) {
    expandedItems.value[id] = true
    activeNodeId.value = id
    autoRotate.value = false
    const related = getRelatedItems(id)
    const newPulse: Record<number, boolean> = {}
    related.forEach(rid => { newPulse[rid] = true })
    pulseEffect.value = newPulse
    const nodeIndex = timelineData.findIndex(i => i.id === id)
    rotationAngle.value = 270 - (nodeIndex / timelineData.length) * 360
  } else {
    activeNodeId.value = null
    autoRotate.value = true
    pulseEffect.value = {}
  }
}

function getRelatedItems(itemId: number): number[] {
  return timelineData.find(i => i.id === itemId)?.relatedIds ?? []
}

function isRelatedToActive(itemId: number): boolean {
  if (!activeNodeId.value) return false
  return getRelatedItems(activeNodeId.value).includes(itemId)
}

function getStatusStyles(status: TimelineItem['status']): string {
  if (status === 'in-progress') return 'text-black bg-white border-black'
  if (status === 'completed') return 'text-white bg-black border-white'
  return 'text-white bg-black/40 border-white/50'
}

function getStatusLabel(status: TimelineItem['status']): string {
  if (status === 'in-progress') return 'CURRENT'
  if (status === 'completed') return 'COMPLETE'
  return 'PENDING'
}

function getItemById(id: number) {
  return timelineData.find(i => i.id === id)
}
</script>

<template>
  <div
    ref="containerRef"
    class="w-full h-[580px] flex items-center justify-center bg-black overflow-hidden rounded-xl relative select-none"
    @click="handleContainerClick"
  >
    <div class="relative w-full max-w-3xl h-full flex items-center justify-center">
      <div
        ref="orbitRef"
        class="absolute w-full h-full flex items-center justify-center"
        :style="{ perspective: '1000px', transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)` }"
      >
        <!-- Center orb -->
        <div class="absolute w-16 h-16 rounded-full bg-gradient-to-br from-accent via-blue-500 to-cyan-400 animate-pulse flex items-center justify-center z-10 pointer-events-none">
          <div class="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" />
          <div class="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style="animation-delay:0.5s" />
          <div class="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
        </div>

        <!-- Orbit ring -->
        <div class="absolute w-[380px] h-[380px] rounded-full border border-white/10 pointer-events-none" />

        <!-- Nodes -->
        <div
          v-for="(item, index) in timelineData"
          :key="item.id"
          class="absolute transition-all duration-700 cursor-pointer"
          :style="{
            transform: `translate(${nodePositions[index].x}px, ${nodePositions[index].y}px)`,
            zIndex: expandedItems[item.id] ? 200 : nodePositions[index].zIndex,
            opacity: expandedItems[item.id] ? 1 : nodePositions[index].opacity,
          }"
          @click.stop="toggleItem(item.id)"
        >
          <!-- Energy glow -->
          <div
            class="absolute rounded-full pointer-events-none"
            :class="pulseEffect[item.id] ? 'animate-pulse' : ''"
            :style="{
              background: 'radial-gradient(circle, rgba(0,122,204,0.35) 0%, rgba(0,122,204,0) 70%)',
              width: `${item.energy * 0.5 + 40}px`,
              height: `${item.energy * 0.5 + 40}px`,
              left: `-${item.energy * 0.25}px`,
              top: `-${item.energy * 0.25}px`,
            }"
          />

          <!-- Node icon -->
          <div
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
              expandedItems[item.id]
                ? 'bg-white text-black border-white shadow-lg shadow-white/30 scale-150'
                : isRelatedToActive(item.id)
                ? 'bg-white/50 text-black border-white animate-pulse'
                : 'bg-black text-white border-white/40',
            ]"
          >
            <MdiIcon :path="item.icon" :size="16" />
          </div>

          <!-- Node label -->
          <div
            :class="[
              'absolute top-12 text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap pointer-events-none',
              expandedItems[item.id] ? 'text-white' : 'text-white/70',
            ]"
            style="left:50%;transform:translateX(-50%)"
          >
            {{ item.title }}
          </div>

          <!-- Expanded card -->
          <Transition name="card-pop">
            <div
              v-if="expandedItems[item.id]"
              class="absolute top-20 w-72 bg-black/90 backdrop-blur-lg border border-white/30 shadow-xl shadow-black/60 rounded-lg"
              style="left:50%;transform:translateX(-50%)"
              @click.stop
            >
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40" />
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold', getStatusStyles(item.status)]">
                    {{ getStatusLabel(item.status) }}
                  </span>
                  <span class="text-xs font-mono text-white/50">{{ item.date }}</span>
                </div>
                <h3 class="text-sm font-semibold text-white mt-2 mb-1">{{ item.title }}</h3>
                <p class="text-xs text-white/75 leading-relaxed">{{ item.content }}</p>

                <!-- Energy bar -->
                <div class="mt-4 pt-3 border-t border-white/10">
                  <div class="flex justify-between items-center text-xs mb-1 text-white/60">
                    <span class="flex items-center gap-1">
                      <MdiIcon :path="mdiFlash" :size="10" /> Energy
                    </span>
                    <span class="font-mono">{{ item.energy }}%</span>
                  </div>
                  <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full transition-all duration-500"
                      :style="{ width: `${item.energy}%` }"
                    />
                  </div>
                </div>

                <!-- Connected nodes -->
                <div v-if="item.relatedIds.length" class="mt-4 pt-3 border-t border-white/10">
                  <div class="flex items-center gap-1 mb-2 text-white/60">
                    <MdiIcon :path="mdiLink" :size="10" />
                    <span class="text-xs uppercase tracking-wider font-medium">Connected</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <button
                      v-for="relId in item.relatedIds"
                      :key="relId"
                      class="flex items-center gap-1 h-6 px-2 text-xs border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all rounded"
                      @click.stop="toggleItem(relId)"
                    >
                      {{ getItemById(relId)?.title }}
                      <MdiIcon :path="mdiArrowRight" :size="10" class="text-white/50" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Hint text -->
    <p class="absolute bottom-4 left-0 right-0 text-center text-white/25 text-xs font-mono pointer-events-none">
      click a node to explore &nbsp;·&nbsp; click background to reset
    </p>
  </div>
</template>

<style scoped>
.card-pop-enter-active { transition: all 0.2s ease-out; }
.card-pop-leave-active { transition: all 0.15s ease-in; }
.card-pop-enter-from { opacity: 0; transform: translateX(-50%) translateY(8px) scale(0.95); }
.card-pop-leave-to   { opacity: 0; transform: translateX(-50%) translateY(4px) scale(0.97); }
</style>