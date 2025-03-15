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

defineExpose({ openModal, closeModal });
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
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-pink-500 shadow-xl transition-all">
              <slot>INI BASE BRO!</slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
