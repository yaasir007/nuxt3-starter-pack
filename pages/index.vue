<script setup>
import { CircleArrowRight, CircleArrowLeft } from 'lucide-vue-next';
import BackGroundImage from '../assets/image/bg.png'

</script>

<template>
  <div class="h-dvh flex flex-col gap-2 justify-center items-center font-serif relative">
    <img :src="BackGroundImage" class="absolute w-full h-dvh" />
    <p class="bg-amber-400 text-5xl flex justify-center items-center gap-3 z-10 p-2 rounded-lg">
      <CircleArrowRight />
      Nuxt 3 Starter Pack
      <CircleArrowLeft />
    </p>

    <p class="text-[white] bg-amber-400 text-3xl p-2 rounded-lg z-10">With Alias, SCSS, Tailwind, Lucide and Primevue
      V4.</p>
  </div>
</template>
