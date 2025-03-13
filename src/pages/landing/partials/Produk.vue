<script setup>
import { ref } from "vue";

const productList = ref([
  {
    nama: "Netflix Premium",
    jenisPaket: [
      { nama: "Basic", harga: "15000 / bln" },
      { nama: "Standard", harga: "30000 / bln" },
      { nama: "Premium", harga: "60000 / bln" },
    ],
    logo: "netflix.png",
  },
  {
    nama: "Spotify Premium Upgrade",
    jenisPaket: [
      { nama: "Basic", harga: "15000 / bln" },
      { nama: "Standard", harga: "30000 / bln" },
      { nama: "Premium", harga: "60000 / bln" },
    ],
    logo: "spotify.png",
  },
  {
    nama: "Canva Pro Upgrade",
    jenisPaket: [
      { nama: "Basic", harga: "15000 / bln" },
      { nama: "Standard", harga: "30000 / bln" },
      { nama: "Premium", harga: "60000 / bln" },
    ],
    logo: "canva.png",
  },
  {
    nama: "YouTube Premium",
    jenisPaket: [
      { nama: "Basic", harga: "15000 / bln" },
      { nama: "Standard", harga: "30000 / bln" },
      { nama: "Premium", harga: "60000 / bln" },
    ],
    logo: "youtube.png",
  },
  {
    nama: "Disney + Hotstar",
    jenisPaket: [
      { nama: "Basic", harga: "15000 / bln" },
      { nama: "Standard", harga: "30000 / bln" },
      { nama: "Premium", harga: "60000 / bln" },
    ],
    logo: "disney+hotstar.png",
  },
]);
</script>

<template>
  <div class="bg-blue-charcoal-950 border-firefly-950 flex flex-col space-y-8 rounded-4xl border p-6 sm:p-16">
    <p class="text-2xl font-semibold sm:text-3xl md:text-4xl">DAFTAR PRODUK</p>
    <div class="flex flex-col space-y-8">
      <!-- Start : Search and Filters -->
      <!-- <div>Fitur Cari dan Filter</div> -->
      <!-- End : Search and Filters -->

      <!-- Start : Products -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="(product, index) in productList" :key="index" class="rounded-xl bg-white text-black">
          <!-- App Name & Logo -->
          <div class="border-b-firefly-950 flex h-32 flex-col items-center justify-center space-y-4 border-b">
            <img :src="`/img/product-logos/${product.logo}`" class="max-h-10 w-auto" />
            <p class="text-base font-medium">{{ product.nama }}</p>
          </div>
          <!-- Package Type -->
          <div class="flex flex-col space-y-3 px-3 py-6">
            <div v-for="(type, index) in product.jenisPaket" :key="index" class="flex flex-col space-y-1">
              <span class="text-xs font-normal">{{ type.nama }}</span>
              <p class="text-base font-medium">{{ type.harga }}</p>
            </div>
          </div>
          <!-- Order Button -->
          <div class="px-3 pb-3">
            <a
              href="https://wa.me/6285117247636?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
              target="blank"
              class="bg-lightning-yellow-400 block w-full rounded-lg px-4 py-2 text-center font-medium"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
      <!-- Start : Products -->
    </div>
  </div>
</template>
