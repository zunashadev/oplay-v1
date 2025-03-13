<script setup>
import AppLogo from "../../../components/app-logo/AppLogo.vue";

defineProps({
  activeMenu: String, // Terima activeMenu dari Layout.vue
});
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 z-50 w-full sm:px-12 sm:pt-4 md:px-20 md:pt-6">
    <div class="bg-gray-600/25 px-8 py-4 shadow-md backdrop-blur-sm sm:rounded-full">
      <div class="flex items-center justify-between">
        <!-- Start : Brand -->
        <a href="#" class="flex items-center space-x-2 sm:space-x-3">
          <AppLogo class="h-6 w-auto sm:h-8" />
          <p class="text-xl font-semibold text-white sm:text-2xl">OPLAY</p>
        </a>
        <!-- End : Brand -->

        <!-- Start : Menu -->
        <!-- End : Menu -->
      </div>
    </div>
  </nav>
</template>
