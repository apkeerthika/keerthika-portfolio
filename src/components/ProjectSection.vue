
<script setup>
import {
  FolderCode,
  BriefcaseBusiness,
  Activity,
  HeartPulse,
  Globe
} from 'lucide-vue-next'

const projects = [
  {
    title: 'RTR Collections',
    category: 'Enterprise Application',
    description:
      'Frontend development and maintenance of an enterprise collections management application.',
    technologies: ['Vue.js', 'Quasar', 'JavaScript', 'REST API'],
    icon: BriefcaseBusiness
  },
  {
    title: 'Tire Inspection',
    category: 'Enterprise Application',
    description:
      'Frontend development for a tire inspection application, including API integration and JWT-based authentication.',
    technologies: ['Vue.js', 'Quasar', 'Axios', 'JWT'],
    icon: Activity
  },
  {
    title: 'RTR Manager',
    category: 'Enterprise Application',
    description:
      'Frontend development and maintenance of the RTR Manager application.',
    technologies: ['Vue.js', 'JavaScript', 'Quasar'],
    icon: FolderCode
  },
  {
    title: 'Gyatix',
    category: 'Freelance · IoT Analytics',
    description:
      'Worked on an IoT analytics application with dashboard and data visualization features.',
    technologies: ['Vue.js', 'Nuxt.js', 'ApexCharts'],
    icon: Activity
  },
  {
    title: 'SPAN Healthcare',
    category: 'Freelance · Healthcare',
    description:
      'Frontend development for a healthcare website with responsive user interfaces.',
    technologies: ['Vue.js', 'Nuxt.js', 'SASS'],
    icon: HeartPulse
  },
  {
    title: 'Event Websites',
    category: 'Freelance · Web Development',
    description:
      'Developed event websites and interactive promotional experiences.',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    icon: Globe
  }
]
</script>

<template>
  <section
    id="projects"
    class="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FDF8F4]"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6">

      <!-- Section Heading -->
      <div class="text-center mb-12 sm:mb-16">

        <p
          class="text-[#C16A45] font-semibold uppercase
                 tracking-widest text-xs sm:text-sm"
        >
          My work
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-[#172033] mt-3">
          Featured Projects
        </h2>

        <p class="text-[#778092] mt-4 max-w-xl mx-auto text-sm sm:text-base leading-7">
          A selection of enterprise applications and freelance
          projects I've contributed to throughout my career.
        </p>

      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">

        <article
          v-for="project in projects"
          :key="project.title"
          class="group bg-white border border-[#F0DDD1]
                 rounded-2xl overflow-hidden
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300"
        >

          <!-- Project Visual -->
          <div
            class="h-40 sm:h-44 bg-gradient-to-br
                   from-[#FDF3ED] to-[#F3DED0]
                   flex items-center justify-center"
          >
            <div
              class="w-20 h-20 bg-white rounded-2xl shadow-sm
                     flex items-center justify-center
                     group-hover:scale-110
                     transition-transform duration-300"
            >
              <component
                :is="project.icon"
                :size="36"
                class="text-[#C16A45]"
              />
            </div>
          </div>

          <!-- Project Information -->
          <div class="p-5 sm:p-6">

            <p
              class="text-xs font-semibold uppercase
                     tracking-wide text-[#A95435]"
            >
              {{ project.category }}
            </p>

            <h3 class="text-lg sm:text-xl font-bold text-[#172033] mt-3">
              {{ project.title }}
            </h3>

            <p class="text-sm text-[#596273] leading-6 mt-3 min-h-[72px]">
              {{ project.description }}
            </p>

            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[#F0E5DE]">

              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="px-3 py-1.5 bg-[#FDF8F4]
                       border border-[#F0DDD1]
                       rounded-md text-xs font-medium
                       text-[#A95435]"
              >
                {{ technology }}
              </span>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
