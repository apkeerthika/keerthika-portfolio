
<script setup>
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-vue-next'

const experiences = [
  {
    company: 'Nava Software Solutions',
    role: 'Frontend Developer',
    duration: 'April 2022 – Present',
    description:
      'Working as the primary frontend developer, independently handling frontend development, enhancements and application maintenance.',
    responsibilities: [
      'Developing and maintaining frontend applications using Vue.js 2/3 and Quasar Framework.',
      'Building reusable components and responsive user interfaces.',
      'Integrating REST APIs and GraphQL services using Axios.',
      'Implementing state management using Pinia and Vuex.',
      'Handling JWT authentication through Axios interceptors and Authorization headers.',
      'Collaborating with the Solution Architect on code reviews and technical decisions.',
      'Troubleshooting issues and improving application maintainability.'
    ],
    technologies: [
      'Vue.js',
      'Quasar',
      'JavaScript',
      'TypeScript',
      'Pinia',
      'Vuex',
      'Axios',
      'REST APIs',
      'GraphQL'
    ]
  },
  {
        company: 'Freelance Projects',
        role: 'Freelance Frontend Developer',
        duration: '2018 – 2021',
        description:
            'Worked on freelance frontend projects, developing websites, dashboards and proof-of-concept applications across different domains.',
        responsibilities: [
            'Developed Gyatix, an IoT analytics and dashboard application.',
            'Worked on SPAN Healthcare website development.',
            'Contributed to the Mokita proof-of-concept application.',
            'Developed event websites and interactive promotional experiences.',
        ],
        technologies: [
            'Vue.js',
            'Nuxt.js',
            'JavaScript',
            'HTML5',
            'CSS3',
            'SASS'
        ]
    }
]
</script>

<template>
  <section id="experience" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold uppercase tracking-wider">
          My journey
        </p>

        <h2 class="text-4xl font-bold text-slate-900 mt-3">
          Professional Experience
        </h2>

        <p class="text-slate-500 mt-4">
          My professional journey and responsibilities
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="max-w-4xl mx-auto">

        <div
          v-for="(experience, index) in experiences"
          :key="experience.company"
          class="relative pl-10 pb-12 border-l-2 border-blue-100 last:border-transparent"
        >

          <!-- Timeline Dot -->
          <div
            class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"
          ></div>

          <!-- Experience Card -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">

            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

              <div>
                <div class="flex items-center gap-3 mb-2">
                  <BriefcaseBusiness class="text-blue-600" :size="24" />

                  <h3 class="text-2xl font-bold text-slate-900">
                    {{ experience.company }}
                  </h3>
                </div>

                <p class="text-lg font-semibold text-blue-600">
                  {{ experience.role }}
                </p>
              </div>

              <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {{ experience.duration }}
              </span>

            </div>

            <p class="text-slate-600 leading-7 mt-6">
              {{ experience.description }}
            </p>

            <!-- Responsibilities -->
            <div class="mt-7">
              <h4 class="font-bold text-slate-900 mb-4">
                Key Responsibilities
              </h4>

              <ul class="space-y-3">
                <li
                  v-for="item in experience.responsibilities"
                  :key="item"
                  class="flex items-start gap-3 text-slate-600 text-sm leading-6"
                >
                  <CheckCircle2
                    :size="18"
                    class="text-blue-600 shrink-0 mt-1"
                  />

                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="mt-7">
              <h4 class="font-bold text-slate-900 mb-4">
                Technologies Used
              </h4>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="technology in experience.technologies"
                  :key="technology"
                  class="px-3 py-2 bg-white border border-blue-100 rounded-lg text-sm text-blue-700"
                >
                  {{ technology }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
