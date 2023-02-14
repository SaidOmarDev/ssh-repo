<script setup lang="ts">
import callToAction from "../core/call-to-action.vue";
</script>

<template>
  <header class="w-full pt-36 overflow-hidden relative z-10" id="intro">
    <div
      class="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-16"
    >
      <div class="content w-full h-full flex flex-col justify-center">
        <h1 class="text-primary font-bold text-3xl mb-4">جودة حياتك وريدنا</h1>

        <h2 class="text-secondary font-bold text-4xl">
          نتائج تحاليل مضمونة وأكثر
        </h2>

        <p class="text-accent my-5 w-full">
          حيث نقوم بتوفير مجموعة واسعة من الفحوصات الدورية والشاملة التي تتيح لك
          تتبع صحتك الجسدية العامة، وبالتالي الوقاية من الأمراض
        </p>

        <div class="flex">
          <call-to-action title="حجز موعد" />

          <a
            href="https://results.wareedlabs.com"
            class="lg:hidden lg:mr-0 mr-3 btn-shape text-light font-bold bg-secondary overflow-hidden rounded relative z-10 flex justify-center items-center content-center ml-2"
          >
            <img
              src="/img/sec_icon.svg"
              class="w-6 h-6 object-contain ml-3"
              alt="Wareed app"
            />
            <span>متابعة تحاليلك</span>
          </a>
        </div>
      </div>

      <div class="image-content w-full">
        <img
          src="/img/intro_img.png"
          class="w-full h-full object-contain object-left"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .icon {
    background: #691e8e;
    width: 50px;
    height: 50px;

    &:hover {
      background: linear-gradient(180deg, #f4036a, #3e09b1);

      img {
        animation: translateX 0.3s linear;
      }
    }
  }

  .image-content {
    height: 500px;

    img {
      animation: translateY 1s linear infinite;
    }
  }
}

@media (max-width: 999px) {
  header .image-content {
    height: 340px !important;
    margin-top: 25px;

    img {
      object-position: center;
    }
  }
}
</style>
