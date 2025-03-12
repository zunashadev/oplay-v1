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
  <div class="flex flex-col space-y-8 p-16 bg-blue-charcoal-950 border border-firefly-950 rounded-4xl">
    <p class="text-4xl font-semibold">DAFTAR PRODUK</p>
    <div class="flex flex-col space-y-8">
      <!-- Start : Search and Filters -->
      <!-- <div>Fitur Cari dan Filter</div> -->
      <!-- End : Search and Filters -->

      <!-- Start : Products -->
      <div class="grid grid-cols-5 gap-6">
        <div v-for="(product, index) in productList" :key="index" class="bg-white text-black rounded-xl">
          <!-- App Name & Logo -->
          <div class="flex flex-col space-y-4 h-32 items-center justify-center border-b border-b-firefly-950">
            <img :src="`/img/product-logos/${product.logo}`" class="w-auto max-h-10" />
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
            <a href="https://wa.me/6285117247636?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" target="blank" class="block text-center bg-lightning-yellow-400 w-full rounded-lg px-4 py-2 font-medium">
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
      <!-- Start : Products -->
    </div>
  </div>
</template>
