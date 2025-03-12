<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
import WhatsAppIcon from "../../../components/icons/social-media/WhatsApp.vue";
import InstagramIcon from "../../../components/icons/social-media/Instagram.vue";
import YouTubeIcon from "../../../components/icons/social-media/YouTube.vue";
</script>

<template>
  <div class="bg-firefly-950 flex items-center justify-between h-16 px-20">
    <div class="flex items-center divide-x divide-firefly-800">
      <div class="pr-4">
        <a href="#" class="flex space-x-3 items-center">
          <AppLogo class="h-8 w-auto" />
          <p class="text-white font-semibold text-2xl">OPLAY</p>
        </a>
      </div>
      <div class="pl-4 flex items-center space-x-3">
        <WhatsAppIcon class="size-6" />
        <InstagramIcon class="size-6" />
        <YouTubeIcon class="size-6" />
      </div>
    </div>
    <p class="text-base font-normal">OPLAY © 2025</p>
  </div>
</template>
