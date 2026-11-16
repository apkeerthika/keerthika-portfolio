
<script setup>
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowRight
} from 'lucide-vue-next'

const technologies = [
  {
    name: 'Vue.js',
    description: 'Core expertise',
    style: 'bg-[#FDF0E9] text-[#A95435]',
    dot: 'bg-[#C16A45]'
  },
  {
    name: 'React',
    description: 'Projects & learning',
    style: 'bg-[#F1F5F9] text-[#334155]',
    dot: 'bg-[#64748B]'
  },
  {
    name: 'Angular',
    description: 'Projects & learning',
    style: 'bg-[#FCEEEE] text-[#B54747]',
    dot: 'bg-[#C65B5B]'
  },
  {
    name: 'TypeScript',
    description: 'Development',
    style: 'bg-[#F4F0FA] text-[#75569B]',
    dot: 'bg-[#9475B8]'
  }
]

const viewProjects = () => {
  document.getElementById('projects')?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden bg-gradient-to-br
           from-[#FFFCF9] via-[#FDF5EF] to-[#F8EAE0]
           px-6 py-20 md:py-28"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1
             lg:grid-cols-2 gap-14 lg:gap-16
             items-center"
    >

      <!-- Introduction -->
      <div class="text-center lg:text-left">

        <p class="text-[#C16A45] font-semibold tracking-widest
                  uppercase text-sm mb-5">
          Hello, I'm
        </p>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl
                   font-bold text-[#172033]
                   leading-tight tracking-tight">
          Keerthika
          <span class="text-[#C16A45]">AP</span>
        </h1>

        <h2 class="text-2xl sm:text-3xl
                   text-[#3D4656] font-medium mt-5">
          Frontend Developer
        </h2>

        <p class="text-[#647084] text-base sm:text-lg
                  leading-8 mt-6 max-w-xl mx-auto lg:mx-0">
          I have 7+ years of experience building modern,
          responsive and scalable web applications using
          Vue.js, JavaScript and TypeScript.
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap justify-center
                    lg:justify-start gap-4 mt-9">

          <button
            @click="viewProjects"
            class="inline-flex items-center gap-2
                   bg-[#C16A45] hover:bg-[#A95435]
                   text-white px-6 py-3.5 rounded-lg
                   font-semibold transition-all duration-200
                   shadow-sm hover:shadow-md"
          >
            View My Projects
            <ArrowRight :size="18" />
          </button>

          <a
            href="mailto:anprekee1026@gmail.com"
            class="inline-flex items-center gap-2
                   border border-[#D9B5A2]
                   text-[#A95435] hover:bg-[#F8EAE0]
                   px-6 py-3.5 rounded-lg
                   font-semibold transition-all duration-200"
          >
            <Mail :size="18" />
            Contact Me
          </a>

        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center
                    lg:justify-start gap-5 mt-9">

          <a
            href="https://github.com/apkeerthika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            class="text-[#778092] hover:text-[#C16A45]
                   transition-colors"
          >
            <Github :size="25" />
          </a>

          <a
            href="https://linkedin.com/in/keerthika-a-p-56a522115"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            class="text-[#778092] hover:text-[#C16A45]
                   transition-colors"
          >
            <Linkedin :size="25" />
          </a>

          <a
            href="mailto:anprekee1026@gmail.com"
            aria-label="Send email"
            class="text-[#778092] hover:text-[#C16A45]
                   transition-colors"
          >
            <Mail :size="25" />
          </a>

        </div>
      </div>

      <!-- Technology Card -->
      <div class="w-full max-w-lg mx-auto">

        <div
          class="bg-white rounded-3xl
                 border border-[#F0DDD1]
                 p-7 sm:p-10
                 shadow-[0_20px_50px_rgba(110,70,45,0.10)]"
        >

          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold
                      text-[#9A8173] tracking-wide">
              FRONTEND DEVELOPER
            </p>

            <span class="relative flex h-3 w-3">
              <span class="absolute inline-flex h-full w-full
                           rounded-full bg-emerald-400 opacity-50
                           animate-ping"></span>
              <span class="relative inline-flex rounded-full
                           h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div class="flex justify-center py-12">
            <div class="bg-[#FDF3ED] p-6 rounded-2xl">
              <Code2 :size="76" class="text-[#C16A45]" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">

            <div
              v-for="tech in technologies"
              :key="tech.name"
              :class="tech.style"
              class="rounded-2xl p-5 text-center
                     transition-all duration-200
                     hover:-translate-y-1 hover:shadow-md"
            >
              <div class="flex items-center justify-center gap-2">
                <span
                  :class="tech.dot"
                  class="w-2 h-2 rounded-full"
                ></span>

                <h3 class="font-bold text-base">
                  {{ tech.name }}
                </h3>
              </div>

              <p class="text-xs mt-2 opacity-80">
                {{ tech.description }}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>
