
<script setup>
import { Code2, Palette, Database, Wrench } from 'lucide-vue-next'

const skillGroups = [
  {
    title: 'Frontend Technologies',
    icon: Code2,
    skills: ['Vue.js 2/3', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Pug']
  },
  {
    title: 'Frameworks & UI Libraries',
    icon: Palette,
    skills: ['Quasar', 'Nuxt.js', 'React (Learning)', 'Angular (Learning)', 'Bootstrap', 'Material UI', 'Fluent UI', 'PrimeVue']
  },
  {
    title: 'State & API Integration',
    icon: Database,
    skills: ['Pinia', 'Vuex', 'REST APIs', 'GraphQL', 'Axios', 'JWT']
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: ['Git', 'Firebase', 'ApexCharts', 'FusionCharts', 'Responsive Design']
  }
]
</script>

<template>
  <section id="skills" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <p class="text-blue-600 font-semibold uppercase tracking-wider">
          What I work with
        </p>

        <h2 class="text-4xl font-bold text-slate-900 mt-3">
          Technical Skills
        </h2>

        <p class="text-slate-500 mt-4">
          Technologies and tools I use to build applications
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">

        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-blue-50 p-3 rounded-xl">
              <component
                :is="group.icon"
                :size="24"
                class="text-blue-600"
              />
            </div>

            <h3 class="text-lg font-bold text-slate-900">
              {{ group.title }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-blue-400 hover:text-blue-600 transition"
            >
              {{ skill }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
