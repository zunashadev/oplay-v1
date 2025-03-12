<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Layout from "./layouts/Layout.vue";
import BerandaPartial from "./partials/Beranda.vue";
import KeunggulanPartial from "./partials/Keunggulan.vue";
import ProdukPartial from "./partials/Produk.vue";
import TransaksiPartial from "./partials/Transaksi.vue";

const activeMenu = ref("beranda");
const sections = ref([]);

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log("Elemen terdeteksi:", entry.target.id);
          activeMenu.value = entry.target.id; // Set activeMenu dengan id yang benar
        }
      });
    },
    { threshold: 0.5 },
  );

  sections.value.forEach((section) => {
    observer.observe(section);
  });
};

onMounted(() => {
  sections.value = document.querySelectorAll("section[id]"); // Hanya pilih <section> dengan id

  observeSections();
});

onUnmounted(() => {
  sections.value.forEach((section) => {
    observer.unobserve(section);
  });
});
</script>

<template>
  <Layout :active-menu="activeMenu">
    <div class="space-y-32">
      <!-- Start : Beranda -->
      <section id="beranda">
        <BerandaPartial />
      </section>
      <!-- End : Beranda -->

      <hr class="border-firefly-950" />

      <!-- Start : Keunggulan -->
      <section id="keunggulan" class="scroll-mt-32">
        <KeunggulanPartial />
      </section>
      <!-- End : Keunggulan -->

      <hr class="border-firefly-950" />

      <!-- Start : Produk -->
      <section id="produk" class="scroll-mt-32">
        <ProdukPartial />
      </section>
      <!-- End : Produk -->

      <!-- <hr class="border-firefly-950" /> -->

      <!-- Start : Cara Pesan -->
      <!-- End : Cara Pesan -->

      <hr class="border-firefly-950" />

      <!-- Start : Transaksi -->
      <section id="transaksi" class="scroll-mt-32">
        <TransaksiPartial />
      </section>
      <!-- End : Transaksi -->
    </div>
  </Layout>
</template>
