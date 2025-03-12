<script setup>
import { ref } from "vue";
import AppLogo from "../../../components/app-logo/AppLogo.vue";

const activeMenu = ref("beranda");

const setActiveMenu = (menu) => {
  activeMenu.value = menu;
};
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
            <a
              href="#beranda"
              @click="setActiveMenu('beranda')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'beranda'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#keunggulan"
              @click="setActiveMenu('keunggulan')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'keunggulan'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
              >Keunggulan
            </a>
          </li>
          <li>
            <a
              href="#produk"
              @click="setActiveMenu('produk')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'produk'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
              >Produk
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="setActiveMenu('cara-pesan')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'cara-pesan'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
              >Cara Pesan
            </a>
          </li>
          <li>
            <a
              href="#transaksi"
              @click="setActiveMenu('transaksi')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'transaksi'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
              >Transaksi
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="setActiveMenu('laporan-kendala')"
              class="text-base font-medium transition-all"
              :class="
                activeMenu === 'laporan-kendala'
                  ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                  : 'hover:text-lightning-yellow-400 text-white'
              "
              >Laporan Kendala
            </a>
          </li>
        </ul>
        <!-- End : Menu -->
      </div>
    </div>
  </div>
</template>
