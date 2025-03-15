<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "solid",
    validator: (value) => ["ghost", "outline", "solid"].includes(value),
  },
  color: {
    type: String,
    default: "lightning-yellow",
    validator: (value) => ["blue-charcoal", "firefly", "buttered-rum", "lightning-yellow"].includes(value),
  },
  shape: {
    type: String,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  const colors = {
    "blue-charcoal": {
      solid:
        "border border-blue-charcoal-950 bg-blue-charcoal-950 text-white hover:border-blue-charcoal-900 hover:bg-blue-charcoal-900",
      outline:
        "border border-blue-charcoal-950 bg-transparent text-blue-charcoal-950 hover:bg-blue-charcoal-950 hover:text-white",
      ghost:
        "border border-transparent bg-transparent text-blue-charcoal-950 hover:border-blue-charcoal-950/5 hover:bg-blue-charcoal-950/5",
    },
    firefly: {
      solid: "border border-firefly-950 bg-firefly-950 text-white hover:border-firefly-900 hover:bg-firefly-900",
      outline: "border border-firefly-950 bg-transparent text-firefly-950 hover:bg-firefly-950 hover:text-white",
      ghost:
        "border border-transparent bg-transparent text-firefly-950 hover:border-firefly-950/5 hover:bg-firefly-950/5",
    },
    "buttered-rum": {
      solid:
        "border border-buttered-rum-700 bg-buttered-rum-700 text-white hover:border-buttered-rum-600 hover:bg-buttered-rum-600",
      outline:
        "border border-buttered-rum-700 bg-transparent text-buttered-rum-700 hover:bg-buttered-rum-700 hover:text-white",
      ghost:
        "border border-transparent bg-transparent text-buttered-rum-700 hover:border-buttered-rum-700/5 hover:bg-buttered-rum-700/5",
    },
    "lightning-yellow": {
      solid:
        "border border-lightning-yellow-400 bg-lightning-yellow-400 text-black hover:border-lightning-yellow-300 hover:bg-lightning-yellow-300",
      outline:
        "border border-lightning-yellow-400 bg-transparent text-lightning-yellow-400 hover:bg-lightning-yellow-400 hover:text-black",
      ghost:
        "border border-transparent bg-transparent text-lightning-yellow-400 hover:border-lightning-yellow-400/5 hover:bg-lightning-yellow-400/5",
    },
  };

  return colors[props.color][props.variant];
});
</script>

<template>
  <button
    :class="[
      'inline-flex justify-center rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-in hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
      buttonClasses,
      shape === 'pill' ? 'rounded-full' : '',
      fullWidth ? 'w-full' : '',
    ]"
  >
    <slot />
  </button>
</template>
