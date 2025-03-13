<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Layout from "./layouts/Layout.vue";
import BerandaPartial from "./partials/Beranda.vue";
import KeunggulanPartial from "./partials/Keunggulan.vue";
import ProdukPartial from "./partials/Produk.vue";
import TransaksiPartial from "./partials/Transaksi.vue";

const activeMenu = ref("beranda");
const sections = ref([]);

/// 🔹 Fungsi untuk mengecek apakah bagian atas section sudah melewati setengah viewport
const checkActiveSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2; // Setengah dari viewport
  let currentSection = "beranda"; // Default section

  sections.value.forEach((section) => {
    const sectionTop = section.offsetTop; // Posisi atas section
    if (scrollPosition >= sectionTop) {
      currentSection = section.id;
    }
  });

  activeMenu.value = currentSection;
};

onMounted(() => {
  sections.value = Array.from(document.querySelectorAll("section[id]")); // Dapatkan semua section dengan id
  window.addEventListener("scroll", checkActiveSection); // Tambahkan event listener
  checkActiveSection(); // Jalankan pertama kali untuk memastikan status awal
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkActiveSection); // Hapus event listener saat komponen di-unmount
});
</script>

<template>
  <Layout :active-menu="activeMenu">
    <div class="space-y-16 sm:space-y-24 md:space-y-32">
      <!-- Start : Beranda -->
      <section id="beranda">
        <BerandaPartial />
      </section>
      <!-- End : Beranda -->

      <hr class="border-firefly-950" />

      <!-- Start : Keunggulan -->
      <section id="keunggulan" class="scroll-mt-24 sm:scroll-mt-32">
        <KeunggulanPartial />
      </section>
      <!-- End : Keunggulan -->

      <hr class="border-firefly-950" />

      <!-- Start : Produk -->
      <section id="produk" class="scroll-mt-24 sm:scroll-mt-32">
        <ProdukPartial />
      </section>
      <!-- End : Produk -->

      <!-- <hr class="border-firefly-950" /> -->

      <!-- Start : Cara Pesan -->
      <!-- End : Cara Pesan -->

      <!-- <hr class="border-firefly-950" /> -->

      <!-- Start : Transaksi -->
      <!-- <section id="transaksi" class="scroll-mt-24 sm:scroll-mt-32">
        <TransaksiPartial />
      </section> -->
      <!-- End : Transaksi -->
    </div>
  </Layout>
</template>
