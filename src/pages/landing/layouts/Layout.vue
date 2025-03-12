<script setup>
import NavbarPartial from "../partials/Navbar.vue";
import FooterPartial from "../partials/Footer.vue";

defineProps({
  activeMenu: String, // Terima activeMenu sebagai prop
});
</script>
<template>
  <div class="bg-black px-20 text-white">
    <!-- Navbar -->
    <NavbarPartial :active-menu="activeMenu" />
    <!-- Content -->
    <slot></slot>
    <!-- Footer -->
    <FooterPartial class="-mx-20" />
  </div>
</template>
