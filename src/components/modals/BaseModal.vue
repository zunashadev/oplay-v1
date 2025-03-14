<script setup>
import { ref, watch, onMounted, watchEffect, inject, defineExpose } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

// Start : Set Scrollbar
const setScrollbarWidth = inject("setScrollbarWidth");

// Fungsi untuk menghitung lebar scrollbar
const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

// Watcher untuk mendeteksi perubahan `isOpen`
watch(isOpen, (newVal) => {
  if (newVal) {
    // Modal dibuka -> Kirim lebar scrollbar
    setScrollbarWidth(getScrollbarWidth());
  } else {
    // Modal ditutup -> Reset nilai di parent
    setScrollbarWidth(null);
  }
});
// End : Set Scrollbar

defineExpose({ openModal });
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-50" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative w-fit transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <slot>
                <div class="p-5 text-center sm:my-8 sm:w-full sm:max-w-lg">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Base Modal</h3>
                  <p class="mt-2 text-sm text-gray-500">Jangan lupa custom ya bro!</p>
                </div>
              </slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
