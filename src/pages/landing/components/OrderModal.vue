<script setup>
import { ref, defineExpose, watch, computed } from "vue";

import BaseModalComponent from "../../../components/modals/BaseModal.vue";
import ButtonComponent from "../../../components/buttons/Button.vue";

import CrossSmallIcon from "../../../components/icons/CrossSmall.vue";
import WhatsAppIcon from "../../../components/icons/social-media/WhatsApp.vue";
import ShareIcon from "../../../components/icons/Share.vue";

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

// Start : Form
const selectedPackageType = ref(null);
const selectedDuration = ref(null);

const selectPackage = (packageType) => {
  if (selectedPackageType.value !== packageType) {
    selectedPackageType.value = packageType;
    selectedDuration.value = null;
  }
  //   console.log(selectedPackageType.value);
};

const selectDuration = (duration) => {
  selectedDuration.value = duration;
  //   console.log(selectedDuration.value);
};

const totalCost = computed(() => {
  if (!selectedPackageType.value || !selectedDuration.value) {
    return 0; // Jika belum memilih paket atau durasi, total biaya adalah 0
  }

  //   console.log(selectedPackageType.value.pricePerUnit);
  //   console.log(selectedDuration.value);

  return selectedPackageType.value.pricePerUnit * selectedDuration.value;
});
// End : Form

// ✅ Watch perubahan pada props.product
// watch(
//   () => props.product,
//   (newProduct) => {
//     if (newProduct) {
//       console.log("Product updated:", newProduct);
//       openModal(); // Jika product ada, buka modal
//     }
//   },
//   { deep: true }, // Gunakan deep watch jika product adalah object
// );
</script>

<template>
  <BaseModalComponent ref="baseModalRef">
    <div class="flex w-full max-w-7xl bg-black text-white">
      <div class="flex w-7xl flex-col">
        <!-- Start : Header -->
        <div class="flex items-center justify-between bg-white px-8 py-5 text-black">
          <div class="flex items-center divide-x divide-gray-300">
            <div class="pr-4">
              <img :src="`/img/product-logos/${product.logo}`" class="max-h-8 w-auto sm:max-h-10" />
            </div>
            <div class="pl-4">
              <p class="text-xl font-semibold">{{ product.name }}</p>
            </div>
          </div>
          <div
            @click="closeModal"
            class="transform text-gray-400 transition-all duration-200 hover:cursor-pointer hover:text-gray-950"
          >
            <CrossSmallIcon class="size-6" />
          </div>
        </div>
        <!-- End : Header -->

        <!-- Start : Content -->
        <div class="flex h-[calc(100vh-140px)] w-full flex-col overflow-auto sm:flex-row">
          <!-- Start : Left -->
          <div class="w-full px-2 py-5 sm:max-w-2/3 sm:px-4">
            <div class="bg-blue-charcoal-950 space-y-3 rounded-lg px-4 py-5">
              <p class="text-lg font-medium">Informasi</p>
              <p class="text-base font-normal">
                {{ product.information }}
              </p>
            </div>
          </div>
          <!-- End : Left -->
          <!-- Start : Right -->
          <div class="w-full space-y-5 px-2 py-5 sm:max-w-1/3 sm:px-4">
            <!-- Start : Daftar Paket -->
            <div class="space-y-3">
              <p class="text-base font-normal">Pilih paket :</p>
              <div class="flex flex-col gap-5">
                <div
                  v-for="(packageType, index) in product.packageTypes"
                  :key="index"
                  @click="selectPackage(packageType)"
                  class="from-lightning-yellow-200 to-firefly-200 outline-lightning-yellow-400 shadow-lightning-yellow-400/50 relative flex h-20 w-full items-end justify-between rounded-lg bg-gradient-to-br px-5 py-3 text-black shadow-lg outline-2 transition-all duration-200 hover:cursor-pointer"
                  :class="packageType === selectedPackageType ? '' : 'grayscale'"
                >
                  <div
                    v-if="packageType.isBestSeller"
                    class="bg-lightning-yellow-400 absolute top-2 -left-2 rounded-sm px-4 py-1 text-xs font-medium"
                  >
                    🔥 Terlaris
                  </div>
                  <div class="text-lg font-medium">{{ packageType.name }}</div>
                  <div class="flex flex-col items-end space-y-1">
                    <p class="text-sm font-medium">Rp. {{ packageType.price }}</p>
                    <p class="text-xs font-light">
                      Rp. {{ packageType.pricePerUnit }} / {{ packageType.durationType }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End : Daftar Paket -->

            <!-- Start : Durasi Berlangganan -->
            <div class="flex flex-col items-start space-y-3">
              <p class="text-lg font-medium">Pilih Durasi Berlangganan</p>
              <template v-if="selectedPackageType">
                <div class="grid w-full grid-cols-2 gap-3">
                  <div
                    v-for="(duration, index) in selectedPackageType.durationList"
                    :key="index"
                    @click="selectDuration(duration)"
                    class="rounded-lg py-2 text-center transition-all duration-200 hover:cursor-pointer"
                    :class="
                      duration === selectedDuration ? 'bg-lightning-yellow-400 text-black' : 'bg-gray-900 text-gray-600'
                    "
                  >
                    {{ duration }} {{ selectedPackageType.durationType }}
                  </div>
                </div>
              </template>
              <template v-else>
                <p class="w-full text-xs text-gray-500">Pilih paket untuk melihat pilihan durasi!</p>
              </template>
            </div>
            <!-- End : Durasi Berlangganan -->

            <!-- Start : Total Biaya -->
            <div class="flex items-center justify-between">
              <p class="text-lg font-medium">Total Biaya</p>
              <p class="text-lg font-medium">Rp. {{ totalCost }}</p>
            </div>
            <!-- End : Total Biaya -->

            <!-- Start : Tombol Pesan -->
            <div class="flex flex-col space-y-2">
              <ButtonComponent variant="solid" color="lightning-yellow" class="space-x-2">
                <span>Pesan </span>
                <WhatsAppIcon class="size-5" />
              </ButtonComponent>
              <ButtonComponent variant="outline" color="lightning-yellow" class="space-x-2">
                <span>Bagikan</span>
                <ShareIcon class="size-5" />
              </ButtonComponent>
            </div>
            <!-- End : Tombol Pesan -->
          </div>
          <!-- End : Right -->
        </div>
        <!-- End : Content -->
      </div>
    </div>
  </BaseModalComponent>
</template>
