<script setup>
import { ref, defineExpose, watch } from "vue";

import BaseModalComponent from "../../../components/modals/BaseModal.vue";
import ButtonComponent from "../../../components/buttons/Button.vue";

const baseModalRef = ref(null);

function openModal() {
  baseModalRef.value.openModal();
}

function closeModal() {
  baseModalRef.value.closeModal();
}

defineExpose({ openModal, closeModal });

// Menerima props dari parent
const props = defineProps({
  product: Object, // Bisa dikirim dari parent
});

// ✅ Watch perubahan pada props.product
watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      console.log("Product updated:", newProduct);
      openModal(); // Jika product ada, buka modal
    }
  },
  { deep: true }, // Gunakan deep watch jika product adalah object
);
</script>

<template>
  <BaseModalComponent ref="baseModalRef">
    <div class="flex w-full max-w-7xl bg-white">
      <div class="flex w-7xl">
        <div class="w-full max-w-2/3 bg-pink-500 px-4 py-5">
          <div>Nama Aplikasi</div>
          <div>Jenis Paket</div>
          <div>Informasi</div>
        </div>
        <div class="w-full max-w-1/3 space-y-4 px-4 py-5">
          <!-- Start : Skema Harga -->
          <div class="flex flex-col items-start rounded-lg border border-gray-200 px-4 py-4">
            <p class="text-lg font-medium">Skema Harga</p>
            <p class="text-sm">Nama Paket : Bulanan</p>
            <p class="text-sm">Harga X : Rp. ...</p>
            <p class="text-sm">Harga X : Rp. ...</p>
          </div>
          <!-- End : Skema Harga -->

          <!-- Start : Durasi Berlangganan -->
          <div class="flex flex-col items-start space-y-3">
            <p class="text-lg font-medium">Pilih Durasi Berlangganan</p>
            <div class="grid w-full grid-cols-2 gap-3">
              <div class="rounded-lg border border-gray-200">1 Bulan</div>
              <div class="rounded-lg border border-gray-200">1 Bulan</div>
              <div class="rounded-lg border border-gray-200">1 Bulan</div>
              <div class="rounded-lg border border-gray-200">1 Bulan</div>
            </div>
          </div>
          <!-- End : Durasi Berlangganan -->

          <!-- Start : Total Biaya -->
          <div class="flex items-center justify-between">
            <p class="text-lg font-medium">Total Biaya</p>
            <p class="text-lg font-medium">Rp. .... .</p>
          </div>
          <!-- End : Total Biaya -->

          <!-- Start : Tombol Pesan -->
          <div class="flex flex-col space-y-2">
            <ButtonComponent variant="solid" color="blue-charcoal">TESS</ButtonComponent>
            <ButtonComponent variant="outline" color="blue-charcoal">TESS</ButtonComponent>
            <ButtonComponent variant="ghost" color="blue-charcoal">TESS</ButtonComponent>

            <ButtonComponent variant="solid" color="firefly">TESS</ButtonComponent>
            <ButtonComponent variant="outline" color="firefly">TESS</ButtonComponent>
            <ButtonComponent variant="ghost" color="firefly">TESS</ButtonComponent>

            <ButtonComponent variant="solid" color="buttered-rum">TESS</ButtonComponent>
            <ButtonComponent variant="outline" color="buttered-rum">TESS</ButtonComponent>
            <ButtonComponent variant="ghost" color="buttered-rum">TESS</ButtonComponent>

            <ButtonComponent variant="solid" color="lightning-yellow">TESS</ButtonComponent>
            <ButtonComponent variant="outline" color="lightning-yellow">TESS</ButtonComponent>
            <ButtonComponent variant="ghost" color="lightning-yellow">TESS</ButtonComponent>
          </div>
          <!-- End : Tombol Pesan -->
        </div>
      </div>
    </div>
  </BaseModalComponent>
</template>
