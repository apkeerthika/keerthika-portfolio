
<script setup>
import { Button } from 'primevue'
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="home"
    class="min-h-[650px] flex items-center bg-gradient-to-br from-white via-blue-50 to-slate-50"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
    >

      <!-- Left Content -->
      <div class="space-y-6">

        <p class="text-blue-600 font-semibold tracking-wide">
          HELLO, I'M
        </p>

        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          Keerthika
          <span class="text-blue-600">AP</span>
        </h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-slate-700">
          Frontend Developer
        </h2>

        <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
          I have 7+ years of experience building modern, responsive
          and scalable web applications using Vue.js, JavaScript
          and TypeScript.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-4 pt-3">

          <Button
            label="View My Projects"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="$emit('view-projects')"
          />

          <Button
            label="Download Resume"
            severity="secondary"
            outlined
            icon="pi pi-download"
            disabled
          />

        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-5 pt-5">

          <a href="https://github.com/" target="_blank"
             aria-label="GitHub"
             class="text-slate-500 hover:text-blue-600 transition">
            <Github :size="24" />
          </a>

          <a
            href="https://linkedin.com/in/keerthika-a-p-56a522115"
            target="_blank"
            aria-label="LinkedIn"
            class="text-slate-500 hover:text-blue-600 transition"
          >
            <Linkedin :size="24" />
          </a>

          <a
            href="mailto:anprekee1026@gmail.com"
            aria-label="Email"
            class="text-slate-500 hover:text-blue-600 transition"
          >
            <Mail :size="24" />
          </a>

        </div>
      </div>

      <!-- Right Content -->
      <div class="flex justify-center">

        <div class="relative w-full max-w-md">

          <div
            class="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"
          ></div>

          <div
            class="relative bg-white border border-blue-100 rounded-3xl shadow-xl p-10"
          >

            <div class="flex justify-between items-center mb-10">
              <span class="text-slate-400 text-sm font-medium">
                FRONTEND DEVELOPER
              </span>

              <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div class="text-7xl text-center font-bold text-blue-600 mb-8">
              &lt;/&gt;
            </div>

            <div class="grid grid-cols-2 gap-4">

              <div class="bg-green-50 rounded-xl p-4 text-center">
                <p class="font-bold text-green-700">Vue.js</p>
                <p class="text-xs text-slate-500 mt-1">Core expertise</p>
              </div>

              <div class="bg-blue-50 rounded-xl p-4 text-center">
                <p class="font-bold text-blue-700">React</p>
                <p class="text-xs text-slate-500 mt-1">Projects & learning</p>
              </div>

              <div class="bg-red-50 rounded-xl p-4 text-center">
                <p class="font-bold text-red-700">Angular</p>
                <p class="text-xs text-slate-500 mt-1">Projects & learning</p>
              </div>

              <div class="bg-purple-50 rounded-xl p-4 text-center">
                <p class="font-bold text-purple-700">TypeScript</p>
                <p class="text-xs text-slate-500 mt-1">Development</p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>
