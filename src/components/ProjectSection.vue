
<script setup>
import {
  FolderCode,
  ExternalLink,
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
    icon: BriefcaseBusiness,
    color: 'blue'
  },
  {
    title: 'Tire Inspection',
    category: 'Enterprise Application',
    description:
      'Frontend development for a tire inspection application, including API integration and JWT-based authentication.',
    technologies: ['Vue.js', 'Quasar', 'Axios', 'JWT'],
    icon: Activity,
    color: 'green'
  },
  {
    title: 'RTR Manager',
    category: 'Enterprise Application',
    description:
      'Frontend development and maintenance of the RTR Manager application.',
    technologies: ['Vue.js', 'JavaScript', 'Quasar'],
    icon: FolderCode,
    color: 'purple'
  },
  {
    title: 'Gyatix',
    category: 'Freelance · IoT Analytics',
    description:
      'Worked on an IoT analytics application with dashboard and data visualization features.',
    technologies: ['Vue.js', 'Nuxt.js', 'ApexCharts'],
    icon: Activity,
    color: 'orange'
  },
  {
    title: 'SPAN Healthcare',
    category: 'Freelance · Healthcare',
    description:
      'Frontend development for a healthcare website with responsive user interfaces.',
    technologies: ['Vue.js', 'Nuxt.js', 'SASS'],
    icon: HeartPulse,
    color: 'pink'
  },
  {
    title: 'Event Websites',
    category: 'Freelance · Web Development',
    description:
      'Developed event websites and interactive promotional experiences.',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    icon: Globe,
    color: 'cyan'
  }
]
</script>

<template>
  <section id="projects" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Heading -->
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold uppercase tracking-wider">
          My work
        </p>

        <h2 class="text-4xl font-bold text-slate-900 mt-3">
          Featured Projects
        </h2>

        <p class="text-slate-500 mt-4 max-w-xl mx-auto">
          A selection of enterprise applications and freelance
          projects I've contributed to throughout my career.
        </p>
      </div>

      <!-- Project Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

        <article
          v-for="project in projects"
          :key="project.title"
          class="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >

          <!-- Project Visual -->
          <div class="h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div class="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center">
              <component
                :is="project.icon"
                :size="38"
                class="text-blue-600"
              />
            </div>
          </div>

          <!-- Project Information -->
          <div class="p-6">

            <p class="text-xs font-semibold uppercase tracking-wide text-blue-600">
              {{ project.category }}
            </p>

            <h3 class="text-xl font-bold text-slate-900 mt-3">
              {{ project.title }}
            </h3>

            <p class="text-sm text-slate-600 leading-6 mt-3 min-h-[72px]">
              {{ project.description }}
            </p>

            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600"
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
