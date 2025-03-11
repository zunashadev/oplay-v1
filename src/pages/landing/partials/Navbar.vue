<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
</script>
<template>
  <div class="fixed top-0 left-0 right-0 w-full z-50 px-20 pt-6">
    <div class="bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm">
      <div class="flex items-center justify-between">
        <!-- Start : Brand -->
        <div class="flex space-x-3 items-center">
          <AppLogo class="h-8 w-auto" />
          <p class="text-white font-semibold text-2xl">OPLAY</p>
        </div>
        <!-- End : Brand -->

        <!-- Start : Menu -->
        <div class="flex items-center space-x-12">
          <span class="font-medium text-base">Beranda</span>
          <span class="font-medium text-base">Produk</span>
          <span class="font-medium text-base">Cara Pesan</span>
          <span class="font-medium text-base">Testimoni</span>
          <span class="font-medium text-base">Laporan Kendala</span>
        </div>
        <!-- End : Menu -->
      </div>
    </div>
  </div>
</template>
