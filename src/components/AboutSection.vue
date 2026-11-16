
<script setup>
import { UserRound, BriefcaseBusiness, Code2, GraduationCap } from 'lucide-vue-next'

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: '7+ Years',
    description: 'Frontend Experience'
  },
  {
    icon: Code2,
    title: 'Multiple Projects',
    description: 'Enterprise Applications'
  },
  {
    icon: GraduationCap,
    title: 'B.Tech IT',
    description: 'Engineering Graduate'
  }
]
</script>

<template>
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <p class="text-blue-600 font-semibold uppercase tracking-wider">
          Get to know me
        </p>

        <h2 class="text-4xl font-bold text-slate-900 mt-3">
          About Me
        </h2>

        <p class="text-slate-500 mt-4">
          A little introduction about my professional journey
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- Introduction -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <UserRound class="text-blue-600" :size="30" />
            <h3 class="text-2xl font-bold text-slate-900">
              Who I Am
            </h3>
          </div>

          <p class="text-slate-600 leading-8 mb-5">
            I'm a Frontend Developer with 7+ years of experience
            building modern, responsive and scalable web applications.
            My primary expertise is in Vue.js and its ecosystem.
          </p>

          <p class="text-slate-600 leading-8 mb-5">
            In my current role, I independently handle frontend
            development and maintenance, working closely with the
            Solution Architect on technical discussions, code reviews
            and implementation decisions.
          </p>

          <p class="text-slate-600 leading-8">
            I enjoy creating reusable components, integrating APIs
            and building user-friendly interfaces while continuously
            exploring modern frontend technologies.
          </p>
        </div>

        <!-- Highlights -->
        <div class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition"
          >
            <component
              :is="item.icon"
              :size="30"
              class="text-blue-600 mb-5"
            />

            <h3 class="text-xl font-bold text-slate-900">
              {{ item.title }}
            </h3>

            <p class="text-sm text-slate-500 mt-2">
              {{ item.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
