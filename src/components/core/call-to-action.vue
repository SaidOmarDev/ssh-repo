<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: `حجز موعد`,
  },
});
</script>

<template>
  <button
    v-scroll-to="{ el: `#contact`, offset: -100 }"
    class="btn-shape text-light font-bold bg-primary overflow-hidden rounded relative z-10 flex justify-center items-center content-center"
  >
    <img
      src="/img/icon.svg"
      class="w-5 h-5 object-contain ml-3"
      alt="app.title"
    />
    <span>{{ title }}</span>
  </button>
</template>

<style lang="scss">
.btn-shape {
  width: fit-content;
  padding: 12px 20px;

  &:hover {
    animation: rotateStorm 0.7s ease-in-out both;

    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
}
</style>
