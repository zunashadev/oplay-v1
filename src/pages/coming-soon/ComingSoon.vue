<script setup>
import AppLogo from "../../components/app-logo/AppLogo.vue";
import Instagram from "../../components/icons/social-media/Instagram.vue";
import YouTube from "../../components/icons/social-media/YouTube.vue";
import WhatsApp from "../../components/icons/social-media/WhatsApp.vue";
</script>

<template>
  <div class="h-screen overflow-hidden flex justify-center items-center bg-black text-white">
    <div class="flex flex-col space-y-16 items-center">
      <div class="flex flex-col items-center">
        <a href="#" class="flex space-x-3 items-center">
          <AppLogo class="h-8 w-auto" />
          <p class="text-white font-semibold text-2xl">OPLAY</p>
        </a>
        <div class="relative inline-block z-10">
          <span class="absolute inset-x-0 bottom-0 bg-firefly-950 w-full h-1/2 -z-10"></span>
          <h1 class="text-lightning-yellow-400 text-3xl sm:text-4xl md:text-5xl font-lobster-fugu">our play!</h1>
        </div>
      </div>

      <div class="relative inline-block z-10">
        <img src="/img/backgrounds/our-play-pattern.png" alt="Logo" class="absolute inset-x-0 bottom-0 -z-10 w-full scale-110 md:scale-130 lg:scale-150" />
        <h1 class="text-lightning-yellow-400 text-center text-5xl md:text-7xl lg:text-9xl xl:text-10xl font-bold">Coming Soon</h1>
      </div>

      <div class="flex items-center space-x-12 mt-12">
        <a href="https://wa.me/6285117247636" target="_blank">
          <div class="rounded-full size-10 md:size-12 lg:size-14 xl:size-16 flex items-center justify-center">
            <WhatsApp class="size-8 md:size-10 lg:size-12 xl:size-14" />
          </div>
        </a>

        <a href="https://www.instagram.com/oplayindonesia" target="_blank">
          <div class="rounded-full size-10 md:size-12 lg:size-14 xl:size-16 flex items-center justify-center">
            <Instagram class="size-8 md:size-10 lg:size-12 xl:size-14" />
          </div>
        </a>

        <a href="https://www.youtube.com/oplayindonesia" target="_blank">
          <div class="rounded-full size-10 md:size-12 lg:size-14 xl:size-16 flex items-center justify-center">
            <YouTube class="size-8 md:size-10 lg:size-12 xl:size-14" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
