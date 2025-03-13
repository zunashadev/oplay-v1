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

// Start : Open WhatsApp
const phoneNumber = "6285117247636";

const openWhatsApp = (product, packageType) => {
  // console.log(product.nama);

  const message =
    `*Detail Pemesanan*\n\n` +
    `Produk:  ${product.nama}\n` +
    `Paket: ${packageType.nama}\n` +
    `Harga: ${packageType.harga}\n` +
    `Durasi: (....?)\n`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
// End : Open WhatsApp
</script>

<template>
  <div class="bg-blue-charcoal-950 border-firefly-950 flex flex-col space-y-8 rounded-4xl border p-6 sm:p-16">
    <p class="text-2xl font-semibold sm:text-3xl md:text-4xl">DAFTAR PRODUK</p>
    <div class="flex flex-col space-y-8">
      <!-- Start : Search and Filters -->
      <!-- <div>Fitur Cari dan Filter</div> -->
      <!-- End : Search and Filters -->

      <!-- Start : Products -->
      <div
        class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <div v-for="(product, index) in productList" :key="index" class="rounded-xl bg-white text-black">
          <!-- App Name & Logo -->
          <div
            class="border-b-firefly-950 flex h-28 flex-col items-center justify-center space-y-2 border-b px-2 sm:h-32 sm:space-y-4"
          >
            <img :src="`/img/product-logos/${product.logo}`" class="max-h-8 w-auto sm:max-h-10" />
            <p class="text-center text-base font-medium">{{ product.nama }}</p>
          </div>
          <!-- Package Type -->
          <div class="flex flex-col space-y-2 px-3 py-6 sm:space-y-3">
            <div
              v-for="(packageType, index) in product.jenisPaket"
              :key="index"
              class="flex items-center justify-between"
            >
              <div class="flex flex-col sm:space-y-1">
                <span class="text-xs font-normal">{{ packageType.nama }}</span>
                <p class="text-base font-medium">{{ packageType.harga }}</p>
              </div>

              <!-- Order Button -->
              <button
                @click="openWhatsApp(product, packageType)"
                class="bg-lightning-yellow-400 rounded-lg px-4 py-2 text-center font-medium hover:cursor-pointer"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Start : Products -->
    </div>
  </div>
</template>
