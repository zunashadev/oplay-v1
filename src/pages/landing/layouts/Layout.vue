<script setup>
import NavbarPartial from "../partials/Navbar.vue";
import FooterPartial from "../partials/Footer.vue";
</script>
<template>
  <div class="bg-black px-20 text-white">
    <!-- Navbar -->
    <NavbarPartial />
    <!-- Content -->
    <slot></slot>
    <!-- Footer -->
    <FooterPartial class="-mx-20" />
  </div>
</template>
