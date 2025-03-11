<script setup>
import Layout from "./layouts/Layout.vue";
import BerandaPartial from "./partials/Beranda.vue";
import KeunggulanPartial from "./partials/Keunggulan.vue";
</script>

<template>
  <Layout>
    <div class="space-y-32">
      <!-- Start : Beranda -->
      <BerandaPartial />
      <!-- End : Beranda -->

      <hr class="border-firefly-950" />

      <!-- Start : Keunggulan -->
      <KeunggulanPartial />
      <!-- End : Keunggulan -->

      <hr class="border-firefly-950" />

      <!-- Start : Produk -->
      <div>Produk</div>
      <!-- End : Produk -->

      <hr class="border-firefly-950" />

      <!-- Start : Cara Pesan -->
      <!-- End : Cara Pesan -->

      <!-- Start : Testimoni -->
      <!-- End : Testimoni -->
    </div>
  </Layout>
</template>
