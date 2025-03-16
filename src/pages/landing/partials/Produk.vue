<script setup>
import { ref, watch, onMounted, watchEffect, inject } from "vue";

import OrderModalComponent from "../components/OrderModal.vue";
import ButtonComponent from "../../../components/buttons/Button.vue";

// Start : Products
const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch("/datas/products.json"); // Mengambil file JSON dari public
    products.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchProducts);
// End : Products

// Start : Order Modal
const orderModalRef = ref(null);
const selectedProduct = ref(null);

function openOrderModal(product) {
  selectedProduct.value = product;
  orderModalRef.value.openModal();
}

function closeOrderModal() {
  orderModalRef.value.closeModal();
}
// End : Order Modal

// Start : Open WhatsApp
const phoneNumber = "6285117247636";

const openWhatsApp = (product, packageType) => {
  // console.log(product.nama);

  const message =
    `*Detail Pemesanan*\n\n` +
    `Produk:  ${product.nama}\n` +
    `Paket: ${packageType.nama}\n` +
    `Harga: ${packageType.harga}\n`;

  // Tambah kebutuhan-kebutuhan lain kaya durasi dan sebagainya

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
// End : Open WhatsApp
</script>

<template>
  <!-- Start : Modal -->
  <OrderModalComponent ref="orderModalRef" :product="selectedProduct"></OrderModalComponent>
  <!-- End : Modal -->

  <div
    class="bg-blue-charcoal-950 border-firefly-950 flex flex-col space-y-4 rounded-4xl border p-6 sm:space-y-6 sm:p-8 md:space-y-8 md:p-10"
  >
    <div>
      <p class="mx-auto text-2xl font-semibold sm:mx-0 sm:text-3xl md:text-4xl">DAFTAR PRODUK</p>
      <p class="text-xs font-light sm:text-sm">
        Produk yang anda cari tidak tersedia?
        <span class="text-lightning-yellow-400 hover:cursor-pointer hover:underline"
          >klik disini untuk mengajukan produk
        </span>
      </p>
    </div>
    <div class="flex flex-col space-y-8">
      <!-- Start : Search and Filters -->
      <!-- <div>Fitur Cari dan Filter</div> -->
      <!-- End : Search and Filters -->

      <!-- Start : Products -->
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <div
          v-for="(product, index) in products"
          :key="index"
          class="from-lightning-yellow-50 to-firefly-50 flex h-full transform flex-col rounded-xl bg-gradient-to-tl text-black transition-all hover:scale-105"
        >
          <!-- App Name & Logo -->
          <div class="flex h-28 flex-col items-center justify-center space-y-2 px-2 sm:h-32 sm:space-y-4">
            <img :src="`/img/product-logos/${product.logo}`" class="max-h-8 w-auto sm:max-h-10" />
            <p class="text-center text-base font-medium">{{ product.name }}</p>
          </div>
          <!-- Package Type -->
          <div
            class="from-lightning-yellow-200 to-firefly-200 border-firefly-400 flex flex-grow flex-col space-y-1.5 border-y bg-gradient-to-tl px-2 py-4 sm:space-y-2"
          >
            <div
              v-for="(packageType, index) in product.packageTypes"
              :key="index"
              class="bg-firefly-950/50 -ml-6 flex w-full flex-col rounded-xl px-5 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <span class="text-xs font-light text-white">{{ packageType.name }}</span>
              <p class="text-base font-medium text-white">
                Rp. {{ packageType.price }}
                <span class="text-xs font-light">/ {{ packageType.unit }} {{ packageType.duration }}</span>
              </p>
            </div>
          </div>

          <!-- Order Button -->
          <div class="p-3">
            <ButtonComponent color="firefly" fullWidth @click="openOrderModal(product)">Pesan</ButtonComponent>
          </div>
        </div>
      </div>
      <!-- Start : Products -->
    </div>
  </div>

  <!-- Start : Order Modal -->

  <!-- End : Order Modal -->
</template>
