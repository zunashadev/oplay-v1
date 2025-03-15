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
        <div class="flex justify-between bg-white px-8 py-5 text-black">
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
        <div class="flex h-[calc(100vh-124px)] w-full overflow-auto">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci architecto necessitatibus nam, itaque
                consequatur, magni quisquam dolorem minus facilis alias rerum eum ipsum repellat nobis animi, quam
                recusandae. Quo reiciendis quis maxime temporibus ab debitis nemo nostrum a alias aliquid deleniti
                pariatur molestias, explicabo, sapiente amet repudiandae sit? Quae earum expedita dolores? Animi illum
                quasi minus beatae in earum iusto tempore, accusamus cum consequatur porro maxime quo fugit. Vero
                molestiae, natus autem quisquam recusandae qui cupiditate sapiente quasi quae eius voluptatem
                repellendus eos, pariatur et? Eligendi natus vel illo obcaecati. Ratione totam fugiat non quod
                perferendis laborum obcaecati delectus sunt. Illo alias odio mollitia quaerat, aliquam et eum voluptatum
                earum sapiente laboriosam veritatis, ad laudantium repudiandae. Id doloribus quis adipisci in ab veniam
                incidunt eaque cupiditate minima dolor beatae quam, pariatur commodi fugiat quas molestiae nobis eius
                distinctio hic? Optio perspiciatis dicta itaque quas dolor dolore, deserunt molestias odit sequi quam
                excepturi, molestiae possimus dolorem. Reiciendis voluptatum iste consectetur recusandae, voluptate id
                nobis est? Sapiente minus quod quibusdam, totam accusantium commodi ratione repudiandae. Fuga
                exercitationem debitis laudantium rem totam labore nobis officiis delectus in. Iure laboriosam
                praesentium aliquam quam accusamus repudiandae illo quae quidem sit distinctio perspiciatis rem quod
                consectetur ut corrupti modi optio, corporis, quo laborum ad temporibus ipsa! Aliquam quam modi et,
                iusto provident ipsa cum veniam sit similique laboriosam minus quae, optio pariatur ex assumenda fugiat
                cupiditate asperiores, sapiente qui sint quas. Modi, adipisci ipsa dolor placeat provident libero neque
                commodi non nesciunt corporis ad cum sed quia veniam sapiente, asperiores unde, voluptas expedita optio
                blanditiis officia corrupti dicta! Repudiandae labore, asperiores vel consequatur, ratione voluptatum
                adipisci maxime in soluta excepturi numquam, molestias expedita quam obcaecati non iusto error at!
                Excepturi et dolores aliquam error exercitationem quis expedita dicta similique itaque animi vero soluta
                eveniet, possimus accusamus.
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
