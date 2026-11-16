
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
      'Vue.js', 'Quasar', 'JavaScript', 'TypeScript',
      'Pinia', 'Vuex', 'Axios', 'REST APIs', 'GraphQL'
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
      'Developed event websites and interactive promotional experiences.'
    ],
    technologies: [
      'Vue.js', 'Nuxt.js', 'JavaScript', 'HTML5', 'CSS3', 'SASS'
    ]
  }
]
</script>

<template>
  <section
    id="experience"
    class="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6">

      <!-- Heading -->
      <div class="text-center mb-12 sm:mb-16">
        <p
          class="text-[#C16A45] font-semibold uppercase
                 tracking-widest text-xs sm:text-sm"
        >
          My journey
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-[#172033] mt-3">
          Professional Experience
        </h2>

        <p class="text-[#778092] mt-4 text-sm sm:text-base">
          My professional journey and responsibilities
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">

        <div
          v-for="(experience, index) in experiences"
          :key="experience.company"
          class="relative pl-7 sm:pl-10 pb-10 sm:pb-12
                 border-l-2 border-[#F0DDD1] last:border-transparent"
        >

          <!-- Timeline Dot -->
          <div
            class="absolute -left-[9px] top-0
                   w-4 h-4 rounded-full
                   bg-[#C16A45] border-[3px]
                   border-white shadow-sm"
          ></div>

          <!-- Experience Card -->
          <div
            class="bg-[#FDF8F4] border border-[#F0DDD1]
                   rounded-2xl p-5 sm:p-7
                   hover:shadow-lg transition-all duration-300"
          >

            <!-- Company and Duration -->
            <div
              class="flex flex-col sm:flex-row
                     sm:items-start sm:justify-between gap-4"
            >

              <div>
                <div class="flex items-center gap-3 mb-3">
                  <div class="bg-white p-2.5 rounded-xl shrink-0">
                    <BriefcaseBusiness
                      class="text-[#C16A45]"
                      :size="22"
                    />
                  </div>

                  <h3 class="text-xl sm:text-2xl font-bold text-[#172033]">
                    {{ experience.company }}
                  </h3>
                </div>

                <p class="text-base sm:text-lg font-semibold text-[#C16A45]">
                  {{ experience.role }}
                </p>
              </div>

              <span
                class="inline-flex self-start items-center
                       px-3 sm:px-4 py-2 rounded-full
                       bg-[#F4E3D9] text-[#89432E]
                       text-xs sm:text-sm font-semibold"
              >
                {{ experience.duration }}
              </span>

            </div>

            <!-- Description -->
            <p class="text-[#596273] leading-7 mt-6 text-sm sm:text-base">
              {{ experience.description }}
            </p>

            <!-- Responsibilities -->
            <div class="mt-7">

              <h4 class="font-bold text-[#172033] mb-4">
                Key Responsibilities
              </h4>

              <ul class="space-y-3">
                <li
                  v-for="item in experience.responsibilities"
                  :key="item"
                  class="flex items-start gap-3
                         text-[#596273] text-sm leading-6"
                >
                  <CheckCircle2
                    :size="18"
                    class="text-[#C16A45] shrink-0 mt-1"
                  />

                  <span>{{ item }}</span>
                </li>
              </ul>

            </div>

            <!-- Technologies -->
            <div class="mt-7">

              <h4 class="font-bold text-[#172033] mb-4">
                Technologies Used
              </h4>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="technology in experience.technologies"
                  :key="technology"
                  class="px-3 py-2 bg-white
                         border border-[#EAD3C5]
                         rounded-lg text-xs sm:text-sm
                         text-[#A95435] font-medium"
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
