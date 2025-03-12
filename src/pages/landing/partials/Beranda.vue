<script setup>
import searchIcon from "../../../components/icons/search.vue";
</script>
<template>
  <div class="h-fit w-full bg-[url('/img/backgrounds/beranda-background.png')] bg-cover bg-center bg-no-repeat">
    <div class="w-full pt-32">
      <div class="mx-auto max-w-7xl px-24 py-24">
        <div class="relative">
          <!-- Start : Decoration -->
          <img src="/img/illustrations/youtube.png" class="absolute -top-8 left-48 h-auto w-14" />
          <img src="/img/illustrations/spotify.png" class="absolute -top-8 right-48 h-auto w-12" />
          <img src="/img/illustrations/game.png" class="absolute bottom-2 left-72 h-auto w-14" />
          <img src="/img/illustrations/netflix.png" class="absolute right-72 bottom-4 h-auto w-12" />

          <img src="/img/illustrations/cloud.png" class="absolute top-1/2 -left-36 h-auto w-9 -translate-y-1/2" />
          <img src="/img/illustrations/cloud.png" class="absolute top-1/2 -right-36 h-auto w-9 translate-y-1/2" />
          <!-- End : Decoration -->

          <!-- Start : Content -->
          <div class="space-y-20 text-center">
            <div class="flex flex-col space-y-12 text-center">
              <div class="flex flex-col space-y-4">
                <div class="text-2xl font-medium">
                  <span class="text-lightning-yellow-400 font-semibold"> OPLAY, our play!</span>
                </div>
                <div class="text-6xl/18 font-bold">Dapatkan Akun Premium dengan Harga Terjangkau !</div>
              </div>

              <div class="text-base font-normal">
                🚀 Netflix, Spotify, YouTube, dan Lainnya - Langganan Tanpa Ribet, Langsung Aktif!
              </div>
            </div>
            <a
              href="#produk"
              class="bg-lightning-yellow-400 mx-auto flex w-fit items-center space-x-3 rounded-full px-6 py-3 font-semibold text-black"
            >
              <span> Telusuri Produk </span>
              <searchIcon class="size-5" />
            </a>
          </div>
          <!-- End : Content -->
        </div>
      </div>
    </div>
  </div>
</template>
