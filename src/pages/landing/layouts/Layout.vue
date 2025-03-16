<script setup>
import { ref, provide } from "vue";

import NavbarPartial from "../partials/Navbar.vue";
import FooterPartial from "../partials/Footer.vue";

defineProps({
  activeMenu: String, // Terima activeMenu sebagai prop
});

// Start : Cek Scrollbar
const scrollbarWidth = ref(null);

// Fungsi untuk mengupdate nilai scrollbar
const setScrollbarWidth = (width) => {
  scrollbarWidth.value = width;
};

// Provide fungsi ke modal
provide("setScrollbarWidth", setScrollbarWidth);
// End : Cek Scrollbar
</script>

<template>
  <div class="bg-black px-4 text-white sm:px-12 md:px-20">
    <!-- Navbar -->
    <div class="fixed top-0 left-0 z-50 w-full" :style="{ paddingRight: scrollbarWidth ? `${scrollbarWidth}px` : '' }">
      <NavbarPartial :active-menu="activeMenu" />
    </div>
    <!-- Content -->
    <slot></slot>
    <!-- Footer -->
    <FooterPartial class="-mx-4 mt-12 sm:-mx-12 md:-mx-20" />
  </div>
</template>
