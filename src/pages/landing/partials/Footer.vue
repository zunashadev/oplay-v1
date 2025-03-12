<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
import WhatsAppIcon from "../../../components/icons/social-media/WhatsApp.vue";
import InstagramIcon from "../../../components/icons/social-media/Instagram.vue";
import YouTubeIcon from "../../../components/icons/social-media/YouTube.vue";
</script>

<template>
  <div class="bg-firefly-950 flex h-16 items-center justify-between px-20">
    <div class="divide-firefly-800 flex items-center divide-x">
      <div class="pr-6">
        <a href="#" class="flex items-center space-x-3">
          <AppLogo class="h-8 w-auto" />
          <p class="text-2xl font-semibold text-white">OPLAY</p>
        </a>
      </div>
      <div class="flex items-center space-x-3 pl-6">
        <WhatsAppIcon class="size-5" />
        <InstagramIcon class="size-5" />
        <YouTubeIcon class="size-5" />
      </div>
    </div>
    <p class="text-base font-light">OPLAY © 2025</p>
  </div>
</template>
