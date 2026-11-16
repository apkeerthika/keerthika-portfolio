
<script setup>
import {
  UserRound,
  BriefcaseBusiness,
  Code2,
  GraduationCap
} from 'lucide-vue-next'

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
  <section
    id="about"
    class="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-white"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6">

      <!-- Section Heading -->
      <div class="text-center mb-12 sm:mb-16">
        <p
          class="text-[#C16A45] font-semibold uppercase
                 tracking-widest text-xs sm:text-sm"
        >
          Get to know me
        </p>

        <h2
          class="text-3xl sm:text-4xl font-bold
                 text-[#172033] mt-3"
        >
          About Me
        </h2>

        <p class="text-[#778092] mt-4 text-sm sm:text-base">
          A little introduction about my professional journey
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2
                  gap-10 lg:gap-16 items-center">

        <!-- Introduction -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-[#FDF3ED] p-3 rounded-xl">
              <UserRound
                class="text-[#C16A45]"
                :size="27"
              />
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-[#172033]">
              Who I Am
            </h3>
          </div>

          <p class="text-[#596273] leading-7 sm:leading-8 mb-5 text-sm sm:text-base">
            I'm a Frontend Developer with 7+ years of experience
            building modern, responsive and scalable web applications.
            My primary expertise is in Vue.js and its ecosystem.
          </p>

          <p class="text-[#596273] leading-7 sm:leading-8 mb-5 text-sm sm:text-base">
            In my current role, I independently handle frontend
            development and maintenance, working closely with the
            Solution Architect on technical discussions, code reviews
            and implementation decisions.
          </p>

          <p class="text-[#596273] leading-7 sm:leading-8 text-sm sm:text-base">
            I enjoy creating reusable components, integrating APIs
            and building user-friendly interfaces while continuously
            exploring modern frontend technologies.
          </p>
        </div>

        <!-- Highlights -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

          <div
            v-for="(item, index) in highlights"
            :key="item.title"
            :class="index === 2 ? 'sm:col-span-2' : ''"
            class="bg-[#FDF8F4] border border-[#F0DDD1]
                   rounded-2xl p-5 sm:p-6
                   hover:shadow-lg hover:-translate-y-1
                   transition-all duration-300"
          >
            <div class="bg-white inline-flex p-3 rounded-xl mb-5">
              <component
                :is="item.icon"
                :size="27"
                class="text-[#C16A45]"
              />
            </div>

            <h3 class="text-lg sm:text-xl font-bold text-[#172033]">
              {{ item.title }}
            </h3>

            <p class="text-sm text-[#778092] mt-2">
              {{ item.description }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
