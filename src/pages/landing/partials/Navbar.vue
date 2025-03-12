<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";
</script>
<template>
  <div class="fixed top-0 right-0 left-0 z-50 w-full px-20 pt-6">
    <div class="rounded-full bg-white/10 px-8 py-4 shadow-md backdrop-blur-sm">
      <div class="flex items-center justify-between">
        <!-- Start : Brand -->
        <a href="#" class="flex items-center space-x-3">
          <AppLogo class="h-8 w-auto" />
          <p class="text-2xl font-semibold text-white">OPLAY</p>
        </a>
        <!-- End : Brand -->

        <!-- Start : Menu -->
        <ul class="flex items-center space-x-12">
          <li>
            <a href="#beranda" class="hover:text-lightning-yellow-400 text-base font-medium transition-all">Beranda</a>
          </li>
          <li>
            <a href="#keunggulan" class="hover:text-lightning-yellow-400 text-base font-medium transition-all"
              >Keunggulan</a
            >
          </li>
          <li>
            <a href="#produk" class="hover:text-lightning-yellow-400 text-base font-medium transition-all">Produk</a>
          </li>
          <li>
            <a href="#" class="hover:text-lightning-yellow-400 text-base font-medium transition-all">Cara Pesan</a>
          </li>
          <li>
            <a href="#transaksi" class="hover:text-lightning-yellow-400 text-base font-medium transition-all"
              >Transaksi</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-lightning-yellow-400 text-base font-medium transition-all">Laporan Kendala</a>
          </li>
        </ul>
        <!-- End : Menu -->
      </div>
    </div>
  </div>
</template>
