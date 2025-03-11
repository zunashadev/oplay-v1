<script setup>
import NavbarPartial from "../partials/Navbar.vue";
</script>
<template>
  <div class="bg-black text-white px-20">
    <NavbarPartial />
    <slot></slot>
  </div>
</template>
