<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
</script>
<template>
  <div class="fixed top-0 left-0 right-0 w-full z-50 px-20 pt-6">
    <div class="bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm">
      <div class="flex items-center justify-between">
        <!-- Start : Brand -->
        <a href="#" class="flex space-x-3 items-center">
          <AppLogo class="h-8 w-auto" />
          <p class="text-white font-semibold text-2xl">OPLAY</p>
        </a>
        <!-- End : Brand -->

        <!-- Start : Menu -->
        <ul class="flex items-center space-x-12">
          <li>
            <a href="#" class="font-medium text-base hover:text-lightning-yellow-400 transition-all">Beranda</a>
          </li>
          <li>
            <a href="#" class="font-medium text-base hover:text-lightning-yellow-400 transition-all">Produk</a>
          </li>
          <li>
            <a href="#" class="font-medium text-base hover:text-lightning-yellow-400 transition-all">Cara Pesan</a>
          </li>
          <li>
            <a href="#" class="font-medium text-base hover:text-lightning-yellow-400 transition-all">Testimoni</a>
          </li>
          <li>
            <a href="#" class="font-medium text-base hover:text-lightning-yellow-400 transition-all">Laporan Kendala</a>
          </li>
        </ul>
        <!-- End : Menu -->
      </div>
    </div>
  </div>
</template>
