
<script setup>
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send
} from 'lucide-vue-next'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anprekee1026@gmail.com',
    link: 'mailto:anprekee1026@gmail.com',
    external: false
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 73582 51456',
    link: 'tel:+917358251456',
    external: false
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://linkedin.com/in/keerthika-a-p-56a522115',
    external: true
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/apkeerthika',
    link: 'https://github.com/apkeerthika',
    external: true
  }
]
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-20 py-16 sm:py-20 lg:py-24 px-5 sm:px-6
           bg-[#FDF8F4]"
  >
    <div class="max-w-6xl mx-auto">

      <!-- Heading -->
      <div class="text-center mb-12 sm:mb-14">

        <p class="text-[#C16A45] font-semibold mb-3
                  tracking-widest text-xs sm:text-sm">
          GET IN TOUCH
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-[#172033]">
          Let's Work Together
        </h2>

        <p class="text-[#778092] mt-4 max-w-2xl mx-auto
                  text-sm sm:text-base leading-7">
          I'm open to frontend development opportunities
          and exciting projects. Feel free to reach out!
        </p>

      </div>

      <!-- Contact Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16
                  items-center">

        <!-- Contact Introduction -->
        <div>

          <h3 class="text-xl sm:text-2xl font-bold text-[#172033] mb-4">
            Have a project or opportunity?
          </h3>

          <p class="text-[#596273] leading-7 mb-8 text-sm sm:text-base">
            Whether you're looking for an experienced frontend
            developer or want to discuss an interesting idea,
            I'd be happy to connect.
          </p>

         <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anprekee1026@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#C16A45]
                    hover:bg-[#A95435] text-white px-6 py-3
                    rounded-lg font-semibold cursor-pointer transition-all duration-200"
            >
            <Send :size="18" />
            Send Me an Email
            </a>

        </div>

        <!-- Contact Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <a
            v-for="item in contactDetails"
            :key="item.label"
            :href="item.link"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="flex items-center gap-4 p-4 sm:p-5
                   bg-white rounded-xl
                   border border-[#F0DDD1]
                   hover:border-[#C16A45]
                   hover:shadow-md
                   transition-all duration-200
                   min-w-0
                   cursor-pointer"
          >

            <div class="p-3 bg-[#FDF3ED] rounded-lg
                        text-[#C16A45] shrink-0">
              <component
                :is="item.icon"
                :size="22"
              />
            </div>

            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-[#778092]">
                {{ item.label }}
              </p>

              <p class="font-semibold text-sm text-[#172033]
                        mt-1 break-words">
                {{ item.value }}
              </p>
            </div>

          </a>

        </div>

      </div>

      <!-- Footer -->
      <div class="border-t border-[#EAD3C5] mt-16 sm:mt-20 pt-8 text-center">

        <p class="text-sm text-[#778092]">
          © {{ new Date().getFullYear() }} Keerthika AP.
          Built with Vue 3.
        </p>

        <p class="text-xs text-[#A18B7D] mt-2">
          Designed and developed with care.
        </p>

      </div>

    </div>
  </section>
</template>
