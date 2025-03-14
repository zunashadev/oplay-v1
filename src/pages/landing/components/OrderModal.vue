<script setup>
import { ref, watch, onMounted, watchEffect, inject, defineExpose } from "vue";

import BaseModalComponent from "../../../components/modals/BaseModal.vue";

const baseModalRef = ref(null);

function openModal() {
  baseModalRef.value.openModal();
}

function closeModal() {
  baseModalRef.value.closeModal();
}

defineExpose({ openModal });
</script>

<template>
  <BaseModalComponent ref="baseModalRef">
    <div class="bg-yellow-500 text-left">
      <div class="">asdas</div>
      <div></div>
    </div>
  </BaseModalComponent>
</template>
