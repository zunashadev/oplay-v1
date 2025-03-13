<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
import WhatsAppIcon from "../../../components/icons/social-media/WhatsApp.vue";
import InstagramIcon from "../../../components/icons/social-media/Instagram.vue";
import YouTubeIcon from "../../../components/icons/social-media/YouTube.vue";
</script>

<template>
  <div class="bg-blue-charcoal-950 flex h-fit items-center justify-between px-5 py-4 sm:h-16 sm:px-20 sm:py-0">
    <div class="divide-firefly-950 flex items-center divide-x">
      <div class="pr-2 sm:pr-6">
        <a href="#" class="flex items-center space-x-2 sm:space-x-3">
          <AppLogo class="h-6 w-auto sm:h-8" />
          <p class="text-xl font-semibold text-white sm:text-2xl">OPLAY</p>
        </a>
      </div>
      <div class="flex items-center space-x-2 pl-2 sm:space-x-3 sm:pl-6">
        <WhatsAppIcon class="size-4 sm:size-5" />
        <InstagramIcon class="size-4 sm:size-5" />
        <YouTubeIcon class="size-4 sm:size-5" />
      </div>
    </div>
    <p class="text-sm font-light sm:text-base">OPLAY © 2025</p>
  </div>
</template>
