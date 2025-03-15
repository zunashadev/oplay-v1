<script setup>
import { ref, defineExpose, watch } from "vue";

import BaseModalComponent from "../../../components/modals/BaseModal.vue";
import ButtonComponent from "../../../components/buttons/Button.vue";

import CrossSmallIcon from "../../../components/icons/CrossSmall.vue";

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
    <div class="flex w-full max-w-7xl bg-black text-white">
      <div class="flex w-7xl flex-col">
        <!-- Start : Header -->
        <div class="flex justify-between bg-white px-5 py-5 text-black">
          <div class="flex items-center divide-x divide-gray-300">
            <div class="pr-4">
              <img :src="`/img/product-logos/${product.logo}`" class="max-h-8 w-auto sm:max-h-10" />
            </div>
            <div class="pl-4">
              <p class="text-xl font-semibold">{{ product.nama }}</p>
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
        <div class="flex w-full">
          <!-- Start : Left -->
          <div class="w-full max-w-2/3 space-y-5 px-4 py-5">
            <div class="space-y-3">
              <p class="text-base font-normal">Pilih paket :</p>
              <div class="flex space-x-2">
                <div
                  class="from-lightning-yellow-400 to-firefly-600 outline-lightning-yellow-400 flex h-20 w-48 items-center justify-center rounded-lg bg-gradient-to-br text-2xl font-medium text-white outline-2 hover:cursor-pointer"
                >
                  Bulanan
                </div>
                <div
                  class="from-lightning-yellow-400 to-firefly-600 flex h-20 w-48 items-center justify-center rounded-lg bg-gradient-to-br text-2xl font-medium text-white opacity-40 grayscale hover:cursor-pointer"
                >
                  Per 3 Bulan
                </div>
                <div
                  class="from-lightning-yellow-400 to-firefly-600 flex h-20 w-48 items-center justify-center rounded-lg bg-gradient-to-br text-2xl font-medium text-white opacity-40 grayscale hover:cursor-pointer"
                >
                  Per 6 Bulan
                </div>
              </div>
            </div>
            <div class="bg-blue-charcoal-950 space-y-3 rounded-lg px-4 py-5">
              <p class="text-lg font-medium">Informasi</p>
              <p class="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eligendi, impedit suscipit doloremque
                commodi tempora nihil assumenda iusto deleniti expedita quod repellat odio vero facilis. Velit, harum,
                amet rerum quae autem aut dicta quaerat itaque consequuntur repudiandae repellendus voluptate nihil,
                fuga facere eveniet impedit saepe accusamus voluptas quam. Ducimus neque similique quasi. Quidem
                expedita ea, unde nihil sed et inventore consequuntur dignissimos fugit quo, quam dolorem dolores
                deserunt possimus voluptas quia nulla, corrupti amet sunt architecto suscipit cum debitis voluptates!
                Voluptatem consequatur adipisci reiciendis. Quaerat repudiandae fuga esse consequatur iure quia
                consectetur repellendus molestiae, exercitationem facere omnis doloremque rerum optio nam nostrum
                reiciendis nulla assumenda dolor non ut odio rem aliquid quis vel! Quas, sunt laudantium molestias
                inventore aliquam ex eius eveniet minus, aspernatur optio fugiat at harum. Repellat fugiat, non
                consequuntur veritatis iure nihil provident ducimus sunt eius. Iure corrupti nostrum magnam. Eos
                asperiores dolor nesciunt, ipsa et dolores? Perferendis temporibus, maiores suscipit nulla ipsum
                blanditiis a, eaque qui repudiandae ad voluptates voluptatibus accusamus minima fuga rem, corrupti
                architecto atque vel ea neque aliquid sunt? Voluptates blanditiis quisquam libero, iste natus voluptate
                dolor, sapiente dolore quibusdam debitis aliquam atque illo tenetur iusto quia dolores. Adipisci at
                aperiam beatae expedita?
              </p>
            </div>
          </div>
          <!-- End : Left -->
          <!-- Start : Right -->
          <div class="w-full max-w-1/3 space-y-5 px-4 py-5">
            <!-- Start : Skema Harga -->
            <div class="flex flex-col rounded-lg border border-gray-600 px-4 py-4">
              <p class="text-lg font-medium">Skema Harga</p>
              <div class="text-xs">
                <p class="">Nama Paket : Bulanan</p>
                <p class="">Harga X : Rp. ...</p>
                <p class="">Harga X : Rp. ...</p>
              </div>
            </div>
            <!-- End : Skema Harga -->

            <!-- Start : Durasi Berlangganan -->
            <div class="flex flex-col items-start space-y-3">
              <p class="text-lg font-medium">Pilih Durasi Berlangganan</p>
              <div class="grid w-full grid-cols-2 gap-3">
                <div class="rounded-lg bg-gray-900 py-2 text-center text-gray-600 hover:cursor-pointer">1 Bulan</div>
                <div class="rounded-lg bg-gray-900 py-2 text-center text-gray-600 hover:cursor-pointer">2 Bulan</div>
                <div class="rounded-lg bg-gray-900 py-2 text-center text-gray-600 hover:cursor-pointer">3 Bulan</div>
                <div class="rounded-lg bg-gray-900 py-2 text-center text-gray-600 hover:cursor-pointer">6 Bulan</div>
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
              <ButtonComponent variant="solid" color="lightning-yellow">Pesan</ButtonComponent>
              <ButtonComponent variant="outline" color="lightning-yellow">Bagikan</ButtonComponent>
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
