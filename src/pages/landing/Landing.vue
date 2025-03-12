<script setup>
import Layout from "./layouts/Layout.vue";
import BerandaPartial from "./partials/Beranda.vue";
import KeunggulanPartial from "./partials/Keunggulan.vue";
import ProdukPartial from "./partials/Produk.vue";
import TransaksiPartial from "./partials/Transaksi.vue";
</script>

<template>
  <Layout>
    <div class="space-y-32">
      <!-- Start : Beranda -->
      <BerandaPartial id="beranda" />
      <!-- End : Beranda -->

      <hr class="border-firefly-950" />

      <!-- Start : Keunggulan -->
      <KeunggulanPartial id="keunggulan" />
      <!-- End : Keunggulan -->

      <hr class="border-firefly-950" />

      <!-- Start : Produk -->
      <ProdukPartial id="produk" />
      <!-- End : Produk -->

      <!-- <hr class="border-firefly-950" /> -->

      <!-- Start : Cara Pesan -->
      <!-- End : Cara Pesan -->

      <hr class="border-firefly-950" />

      <!-- Start : Transaksi -->
      <TransaksiPartial id="transaksi" />
      <!-- End : Transaksi -->
    </div>
  </Layout>
</template>
