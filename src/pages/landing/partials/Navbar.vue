<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import AppLogo from "../../../components/app-logo/AppLogo.vue";
import MenuBurgerIcon from "../../../components/icons/MenuBurger.vue";

defineProps({
  activeMenu: String, // Terima activeMenu dari Layout.vue
});
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 z-50 w-full sm:px-12 sm:pt-4 md:px-20 md:pt-6">
    <Disclosure>
      <div class="bg-gray-600/25 px-8 py-4 shadow-md backdrop-blur-sm sm:rounded-full">
        <div class="flex items-center justify-between">
          <!-- Start : Brand -->
          <a href="#" class="flex items-center space-x-2 sm:space-x-3">
            <AppLogo class="h-6 w-auto sm:h-8" />
            <p class="text-xl font-semibold text-white sm:text-2xl">OPLAY</p>
          </a>
          <!-- End : Brand -->

          <!-- Start : Mobile Menu Button -->
          <DisclosureButton class="py-2">
            <MenuBurgerIcon class="size-4" />
          </DisclosureButton>
          <!-- End : Mobile Menu Button -->
        </div>
        <!-- Start : Mobile Menu Content -->
        <DisclosurePanel class="pt-3 text-gray-500 sm:hidden">
          <ul class="flex flex-col">
            <li class="py-2">
              <a
                href="#beranda"
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
            <li class="py-2">
              <a
                href="#keunggulan"
                class="text-base font-medium transition-all"
                :class="
                  activeMenu === 'keunggulan'
                    ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                    : 'hover:text-lightning-yellow-400 text-white'
                "
                >Keunggulan
              </a>
            </li>
            <li class="py-2">
              <a
                href="#produk"
                class="text-base font-medium transition-all"
                :class="
                  activeMenu === 'produk'
                    ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                    : 'hover:text-lightning-yellow-400 text-white'
                "
                >Produk
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
                class="text-base font-medium transition-all"
                :class="
                  activeMenu === 'cara-pesan'
                    ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                    : 'hover:text-lightning-yellow-400 text-white'
                "
                >Cara Pesan
              </a>
            </li>
            <li class="py-2">
              <a
                href="#transaksi"
                class="text-base font-medium transition-all"
                :class="
                  activeMenu === 'transaksi'
                    ? 'text-lightning-yellow-400 hover:text-lightning-yellow-500'
                    : 'hover:text-lightning-yellow-400 text-white'
                "
                >Transaksi
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
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
        </DisclosurePanel>
        <!-- End : Mobile Menu Content -->
      </div>
    </Disclosure>
  </nav>
</template>
