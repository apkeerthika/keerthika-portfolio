
<script setup>
import {
  Code2,
  Palette,
  Database,
  Wrench
} from 'lucide-vue-next'

const skillGroups = [
  {
    title: 'Frontend Technologies',
    icon: Code2,
    skills: [
      'Vue.js 2/3',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SASS',
      'Pug'
    ]
  },
  {
    title: 'Frameworks & UI Libraries',
    icon: Palette,
    skills: [
      'Quasar',
      'Nuxt.js',
      'React (Learning)',
      'Angular (Learning)',
      'Bootstrap',
      'Material UI',
      'Fluent UI',
      'PrimeVue'
    ]
  },
  {
    title: 'State & API Integration',
    icon: Database,
    skills: [
      'Pinia',
      'Vuex',
      'REST APIs',
      'GraphQL',
      'Axios',
      'JWT'
    ]
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      'Git',
      'Firebase',
      'ApexCharts',
      'FusionCharts',
      'Responsive Design'
    ]
  }
]

const isLearning = (skill) => skill.includes('(Learning)')
</script>

<template>
  <section
    id="skills"
    class="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FDF8F4]"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6">

      <!-- Section Heading -->
      <div class="text-center mb-12 sm:mb-16">
        <p
          class="text-[#C16A45] font-semibold uppercase
                 tracking-widest text-xs sm:text-sm"
        >
          What I work with
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-[#172033] mt-3">
          Technical Skills
        </h2>

        <p class="text-[#778092] mt-4 text-sm sm:text-base">
          Technologies and tools I use to build applications
        </p>
      </div>

      <!-- Skill Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="bg-white border border-[#F0DDD1]
                 rounded-2xl p-5 sm:p-7
                 shadow-sm hover:shadow-lg
                 hover:-translate-y-1
                 transition-all duration-300"
        >

          <!-- Card Heading -->
          <div class="flex items-center gap-3 mb-6">

            <div class="bg-[#FDF3ED] p-3 rounded-xl shrink-0">
              <component
                :is="group.icon"
                :size="24"
                class="text-[#C16A45]"
              />
            </div>

            <h3 class="text-base sm:text-lg font-bold text-[#172033]">
              {{ group.title }}
            </h3>

          </div>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2.5">

            <span
              v-for="skill in group.skills"
              :key="skill"
              :class="isLearning(skill)
                ? 'bg-white border-dashed border-[#D9B5A2] text-[#A95435]'
                : 'bg-[#FDF8F4] border-[#F0DDD1] text-[#596273]'"
              class="px-3 sm:px-4 py-2 border rounded-lg
                     text-xs sm:text-sm font-medium
                     hover:border-[#C16A45]
                     hover:text-[#A95435]
                     transition-colors duration-200"
            >
              {{ skill }}
            </span>

          </div>

        </div>

      </div>

      <!-- Learning Note -->
      <p class="text-center text-xs text-[#778092] mt-8">
        Currently expanding my skills in React and Angular.
      </p>

    </div>
  </section>
</template>
