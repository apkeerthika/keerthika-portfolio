
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Download } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

let observer

const navigateTo = (id) => {
  isMenuOpen.value = false

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
        )

      if (visibleSections.length) {
        activeSection.value = visibleSections[0].target.id
      }
    },
    {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    }
  )

  navItems.forEach((item) => {
    const section = document.getElementById(item.id)

    if (section) {
      observer.observe(section)
    }
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md
                 border-b border-[#F0E5DE]">

    <div class="max-w-7xl mx-auto px-6">

      <div class="h-20 flex items-center justify-between">

        <!-- Logo -->
        <button
          @click="navigateTo('home')"
          class="text-2xl font-bold tracking-tight
                 text-[#C16A45]"
        >
          K<span class="text-[#172033]">.</span>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">

          <button
            v-for="item in navItems"
            :key="item.id"
            @click="navigateTo(item.id)"
            :class="activeSection === item.id
              ? 'text-[#C16A45] font-semibold'
              : 'text-[#596273] hover:text-[#C16A45]'"
            class="text-sm transition-colors duration-200 cursor-pointer"
          >
            {{ item.label }}
          </button>

        </nav>

        <!-- Desktop Resume Button -->
        <a
          href="/resume.pdf"
          download
          class="hidden lg:inline-flex items-center gap-2
                 bg-[#C16A45] hover:bg-[#A95435]
                 text-white px-5 py-2.5 rounded-lg
                 text-sm font-semibold transition-colors cursor-pointer"
        >
          <Download :size="16" />
          Download Resume
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden p-2 rounded-lg
                 text-[#172033] hover:bg-[#FDF3ED] cursor-pointer"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMenuOpen"
        >
          <X v-if="isMenuOpen" :size="25" />
          <Menu v-else :size="25" />
        </button>

      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="lg:hidden border-t border-[#F0E5DE]
               py-4 space-y-1"
      >

        <button
          v-for="item in navItems"
          :key="item.id"
          @click="navigateTo(item.id)"
          :class="activeSection === item.id
            ? 'bg-[#FDF3ED] text-[#A95435] font-semibold'
            : 'text-[#596273] hover:bg-[#FDF8F4]'"
          class="block w-full text-left px-4 py-3
                 rounded-lg text-sm transition-colors cursor-pointer"
        >
          {{ item.label }}
        </button>

        <a
          href="/resume.pdf"
          download="resume.pdf"
           target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 cursor-pointer
                   bg-[#C16A45] hover:bg-[#A95435]
                   text-white px-5 py-2.5 rounded-lg
                   text-sm font-semibold transition-colors"
        >
          <Download :size="16" />
          Download Resume
        </a>

      </div>

    </div>
  </header>
</template>
