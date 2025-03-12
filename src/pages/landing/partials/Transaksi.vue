<script setup></script>

<template>
  <div class="pb-12">
    <div class="flex gap-4">
      <!-- Header Section -->
      <div class="w-1/3 space-y-3">
        <p class="text-4xl font-semibold">Transaksi</p>
        <p class="text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae eos incidunt esse provident minus quo
          quam nesciunt magni eligendi!
        </p>
      </div>

      <!-- Snap Carousel -->
      <div class="w-2/3 max-w-full overflow-hidden">
        <div class="flex w-full snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth p-4 whitespace-nowrap">
          <div class="flex h-[600px] min-w-96 snap-start items-center justify-center bg-red-500 text-lg text-white">
            1
          </div>
          <div class="flex h-[600px] min-w-96 snap-start items-center justify-center bg-blue-500 text-lg text-white">
            2
          </div>
          <div class="flex h-[600px] min-w-96 snap-start items-center justify-center bg-green-500 text-lg text-white">
            3
          </div>
          <div class="flex h-[600px] min-w-96 snap-start items-center justify-center bg-yellow-500 text-lg text-white">
            4
          </div>
          <div class="flex h-[600px] min-w-96 snap-start items-center justify-center bg-purple-500 text-lg text-white">
            5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
