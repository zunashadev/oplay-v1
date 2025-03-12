<script setup>
import searchIcon from "../../../components/icons/search.vue";
</script>
<template>
  <div class="h-fit w-full bg-no-repeat bg-cover bg-center bg-[url('/img/backgrounds/beranda-background.png')]">
    <div class="pt-32 w-full">
      <div class="px-24 py-24 max-w-7xl mx-auto">
        <div class="relative">
          <!-- Start : Decoration -->
          <img src="/img/illustrations/youtube.png" class="absolute -top-12 left-40 w-14 h-auto" />
          <img src="/img/illustrations/spotify.png" class="absolute -top-12 right-40 w-12 h-auto" />
          <img src="/img/illustrations/game.png" class="absolute bottom-2 left-72 w-14 h-auto" />
          <img src="/img/illustrations/netflix.png" class="absolute bottom-4 right-72 w-12 h-auto" />

          <img src="/img/illustrations/cloud.png" class="absolute top-1/2 -left-36 -translate-y-1/2 w-9 h-auto" />
          <img src="/img/illustrations/cloud.png" class="absolute top-1/2 -right-36 translate-y-1/2 w-9 h-auto" />
          <!-- End : Decoration -->

          <!-- Start : Content -->
          <div class="space-y-20 text-center">
            <div class="flex flex-col space-y-12 text-center">
              <div class="flex flex-col space-y-4">
                <div class="text-2xl font-medium"><span class="font-semibold text-lightning-yellow-400"> OPLAY</span>, our play!</div>
                <div class="font-semibold text-6xl/18">Dapatkan Akun Premium dengan Harga Terjangkau !</div>
              </div>

              <div class="font-normal text-base">🚀 Netflix, Spotify, YouTube, dan Lainnya - Langganan Tanpa Ribet, Langsung Aktif!</div>
            </div>
            <button class="flex space-x-3 items-center mx-auto bg-lightning-yellow-400 text-black px-6 py-3 font-semibold rounded-full">
              <span> Telusuri Produk </span>
              <searchIcon class="size-5" />
            </button>
          </div>
          <!-- End : Content -->
        </div>
      </div>
    </div>
  </div>
</template>
