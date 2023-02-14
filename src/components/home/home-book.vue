<script setup lang="ts"></script>

<template>
  <div
    class="book w-full py-24 overflow-hidden relative z-10 bg-primary"
    id="book"
  >
    <div
      class="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-16"
    >
      <div
        class="content w-full h-full flex flex-col justify-center lg:col-span-2"
      >
        <h2 class="text-light font-bold text-4xl">
          احجز استشارتك الطبية مجانًا من منزلك
        </h2>

        <p class="text-light my-5 w-full">
          ما عليك سوى التواصل معنا واستشارة أفضل الأطباء المختصين لتشخيص حالتك
          وصرف الأدوية وإيصالها لمنزلك إن لزم الأمر
        </p>

        <button
          v-scroll-to="{ el: `#contact`, offset: -100 }"
          class="btn-shape text-light font-bold bg-light bg-opacity-25 overflow-hidden rounded relative z-10 flex justify-center items-center content-center"
        >
          تواصل معنا
        </button>
      </div>

      <div class="image-content w-full md:mt-0 mt-10">
        <img src="/img/book.svg" class="" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.book {
  &::after {
    content: "";
    position: absolute;
    background: url("/img/book_img.svg") no-repeat;
    top: 0;
    left: 0;
    width: 215px;
    height: 100%;
  }
}
</style>
