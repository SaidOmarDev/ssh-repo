<script setup lang="ts">
import callToAction from "../core/call-to-action.vue";
</script>

<template>
  <div class="about w-full py-24 overflow-hidden relative z-10" id="about">
    <div
      class="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-16"
    >
      <div class="flex items-center md:justify-start justify-center w-full">
        <img src="/img/about_img.png" alt="about image" />
      </div>

      <div
        class="content w-full h-full flex flex-col justify-center md:mt-0 mt-10"
      >
        <h2 class="text-dark font-bold text-2xl">
          <span class="text-secondary"> مختبرات وريد الطبية؟</span>
        </h2>

        <h4 class="text-primary mt-5 font-bold text-xl">
          نساعدك في اتخاذ قرارات مستنيرة بشأن صحتك
        </h4>
        <p class="text-accent opacity-80 my-5 w-full">
          نلتزم بخدمات عالية الجودة تلبي احتياجاتك، وتواكب المتغيرات الطبية
          المختلفة التي تتطلبها التطورات الطبية والتقنيات المطورة حديثًا في مجال
          الفحوصات المخبرية الطبية
        </p>

        <call-to-action title="تواصل معنا" class="mt-10" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  .image-content {
    img {
      animation: translateY 1s linear infinite;
    }
  }
}
</style>
