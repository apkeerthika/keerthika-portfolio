
<script setup>
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send
} from 'lucide-vue-next'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anprekee1026@gmail.com',
    link: 'mailto:anprekee1026@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 73582 51456',
    link: 'tel:+917358251456'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://linkedin.com/in/keerthika-a-p-56a522115'
  }
]
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-slate-50">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-14">
        <p class="text-blue-600 font-semibold mb-3">
          GET IN TOUCH
        </p>

        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
          Let's Work Together
        </h2>

        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
          I'm open to frontend development opportunities
          and exciting projects. Feel free to reach out!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h3 class="text-2xl font-semibold text-slate-900 mb-4">
            Have a project or opportunity?
          </h3>

          <p class="text-slate-600 leading-7 mb-8">
            Whether you're looking for an experienced frontend
            developer or want to discuss an interesting idea,
            I'd be happy to connect.
          </p>

          <a
            href="mailto:anprekee1026@gmail.com"
            class="inline-flex items-center gap-2 bg-blue-600
                   hover:bg-blue-700 text-white px-6 py-3
                   rounded-lg font-medium transition"
          >
            <Send :size="18" />
            Send Me an Email
          </a>
        </div>

        <div class="space-y-4">
          <a
            v-for="item in contactDetails"
            :key="item.label"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-5 bg-white
                   rounded-xl border border-slate-200
                   hover:border-blue-300 hover:shadow-md
                   transition"
          >
            <div class="p-3 bg-blue-50 rounded-lg text-blue-600">
              <component :is="item.icon" :size="22" />
            </div>

            <div>
              <p class="text-sm text-slate-500">
                {{ item.label }}
              </p>
              <p class="font-semibold text-slate-800">
                {{ item.value }}
              </p>
            </div>
          </a>
        </div>

      </div>

      <div class="border-t border-slate-200 mt-20 pt-8 text-center">
        <p class="text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Keerthika AP.
          Built with Vue 3.
        </p>
      </div>

    </div>
  </section>
</template>
