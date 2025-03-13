<script setup>
import { ref, onMounted } from "vue";

import SearchIcon from "../../../components/icons/search.vue";
import WhatsAppIcon from "../../../components/icons/social-media/WhatsApp.vue";

const text = "OPLAY, our play!";
const displayedText = ref(""); // Tidak perlu spasi di awal
let index = 0;
let isDeleting = false;

const typeEffect = () => {
  if (!isDeleting) {
    // Mengetik teks
    if (index < text.length) {
      displayedText.value += text[index];
      index++;
      setTimeout(typeEffect, 100); // Kecepatan mengetik
    } else {
      // Setelah selesai mengetik, tunggu 2 detik lalu mulai menghapus
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 2000);
    }
  } else {
    // Menghapus teks satu per satu
    if (index > 0) {
      displayedText.value = displayedText.value.slice(0, -1);
      index--;
      setTimeout(typeEffect, 50); // Kecepatan menghapus
    } else {
      // Setelah selesai menghapus, ulangi mengetik
      isDeleting = false;
      setTimeout(typeEffect, 500);
    }
  }
};

onMounted(() => {
  typeEffect();
});
</script>
<template>
  <div class="h-fit w-full bg-[url('/img/backgrounds/beranda-background.png')] bg-cover bg-center bg-no-repeat">
    <div class="w-full pt-20 sm:pt-24 md:pt-28">
      <div class="max-w-7x mx-auto px-4 py-16 sm:p-20 sm:py-24 md:p-24 md:py-24">
        <div class="relative">
          <!-- Start : Decoration -->
          <img
            src="/img/illustrations/youtube.png"
            class="absolute -top-4 left-0 h-auto w-6 sm:left-4 sm:w-8 md:left-8 md:w-10 lg:left-14 lg:w-12 xl:left-20"
          />
          <img
            src="/img/illustrations/spotify.png"
            class="absolute -top-4 right-0 h-auto w-4 sm:right-4 sm:w-6 md:right-8 md:w-8 lg:right-14 lg:w-10 xl:right-20"
          />
          <img
            src="/img/illustrations/game.png"
            class="absolute bottom-16 -left-2 h-auto w-6 sm:left-4 sm:w-8 md:left-7 md:w-10 lg:left-12 lg:w-12 xl:left-19"
          />
          <img
            src="/img/illustrations/netflix.png"
            class="absolute -right-1 bottom-16 h-auto w-4 sm:right-4 sm:w-6 md:right-8 md:w-8 lg:right-14 lg:w-10 xl:right-20"
          />

          <img
            src="/img/illustrations/cloud.png"
            class="absolute top-1/2 -left-6 h-auto w-3 translate-y-5 sm:-left-8 sm:w-5 md:-left-14 lg:-left-24 xl:-left-28 xl:w-8 xl:-translate-y-1/2"
          />
          <img
            src="/img/illustrations/cloud.png"
            class="absolute top-1/2 -right-6 h-auto w-3 translate-y-5 sm:-right-8 sm:w-5 md:-right-14 lg:-right-24 xl:-right-28 xl:w-8 xl:translate-y-1/2"
          />
          <!-- End : Decoration -->

          <!-- Start : Content -->
          <div class="space-y-24 text-center sm:space-y-20">
            <!--  -->
            <div class="flex flex-col space-y-8 text-center sm:space-y-12">
              <div class="flex flex-col space-y-4">
                <div class="text-lg font-medium sm:text-xl md:text-2xl">
                  <span class="text-lightning-yellow-400 font-semibold">
                    {{ displayedText }}<span class="inline-block w-[1ch]"></span>
                  </span>
                </div>
                <div class="text-3xl/10 font-bold sm:text-4xl/12 md:text-5xl/16 lg:text-6xl/18">
                  Dapatkan Akun Premium dengan Harga Terjangkau !
                </div>
              </div>
              <div class="text-sm font-normal sm:text-base">
                🚀 Netflix, Spotify, YouTube, dan Lainnya - Langganan Tanpa Ribet, Langsung Aktif!
              </div>
            </div>
            <!--  -->
            <div class="flex">
              <div class="mx-auto flex flex-col gap-4 lg:flex-row">
                <a
                  href="https://wa.me/6285117247636"
                  target="_blank"
                  class="border-lightning-yellow-400 hover:bg-lightning-yellow-500 hover:outline-lightning-yellow-400 text-lightning-yellow-400 mx-auto flex w-full items-center space-x-3 rounded-full border px-6 py-3 font-semibold transition-all hover:text-black hover:outline hover:outline-offset-4 sm:w-fit"
                >
                  <span> Hubungi Penjual </span>
                  <WhatsAppIcon class="size-5" />
                </a>
                <a
                  href="#produk"
                  class="bg-lightning-yellow-400 hover:bg-lightning-yellow-500 hover:outline-lightning-yellow-400 mx-auto flex w-full items-center space-x-3 rounded-full px-6 py-3 font-semibold text-black transition-all hover:outline hover:outline-offset-4 sm:w-fit"
                >
                  <span> Telusuri Produk </span>
                  <searchIcon class="size-5" />
                </a>
              </div>
            </div>
          </div>
          <!-- End : Content -->
        </div>
      </div>
    </div>
  </div>
</template>
