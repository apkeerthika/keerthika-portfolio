
<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const activeSection = ref('home')

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

function navigateTo(id) {
  activeSection.value = id

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <a href="#home" class="text-2xl font-bold text-blue-700">
        K<span class="text-slate-900">.</span>
      </a>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navigation"
          :key="item.id"
          @click="navigateTo(item.id)"
          class="text-sm font-medium transition-colors"
          :class="activeSection === item.id
            ? 'text-blue-600'
            : 'text-slate-600 hover:text-blue-600'"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- Resume Button -->
      <Button
        label="Download Resume"
        icon="pi pi-download"
        size="small"
      />

    </div>
  </header>
</template>
