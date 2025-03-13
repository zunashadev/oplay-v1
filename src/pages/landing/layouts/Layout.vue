<script setup>
import NavbarPartial from "../partials/Navbar.vue";
import FooterPartial from "../partials/Footer.vue";

defineProps({
  activeMenu: String, // Terima activeMenu sebagai prop
});
</script>
<template>
  <div class="bg-black px-4 text-white sm:px-12 md:px-20">
    <!-- Navbar -->
    <NavbarPartial :active-menu="activeMenu" />
    <!-- Content -->
    <slot></slot>
    <!-- Footer -->
    <FooterPartial class="-mx-4 mt-8 sm:-mx-12 md:-mx-20" />
  </div>
</template>
