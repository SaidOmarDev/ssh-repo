<script setup lang="ts">
import { ref } from "vue";

let opinions = ref([
  {
    name: "فهد العتيبي",
    img: "man.svg",
    desc: "اقولها بكل صراحه افضل مختبر على مستوى الرياض تعاملت معه سواء من تعامل الموظفين اللطيف او من خفة اليد في سحب الدم او من الخدمات المقدمة نتايجي طلعت بسرعه وبعدها تواصل معي الطبيب و شرح لي جميع النتايج و ارسل لي وصفة طبيه للادويه اللي احتاجها",
  },
  {
    name: "تركي",
    img: "man.svg",
    desc: "تجربة جميلة جداً مع مختبرات وريد خدمة مميزة وسريعه وجودة عالية في التعقيم وجمع العينات وتسليم النتائج بطريقة احترافية وبعد خصومات جباره، فرق اسعارهم بكثييير عن باقي المختبرات أسعار معقوله وخدمه مميزه بالمقابل، أخص بالشكر الموظفة في استقبال المراجعين سيدة فاضلة وقمة في التعامل الراقي مع الناس شكراً لكم جميعاً على تميز الخدمة.",
  },
  {
    name: "هيثم السعدون",
    img: "man.svg",
    desc: "اعطيتكم ٥ نجوم لو في زياده تستاهلون صراحه افضل مختبر ادخله راحه نفسيه جدآ ونظافه والاستقبال البنت ماقصرت معنا بشكل شكرا شكرا لكم وان شاءالله كل مره احتاجه تحليل من غير شر بجيكم",
  },
]);
</script>

<template>
  <div class="opinions my-24" id="opinions">
    <div class="container relative">
      <div class="grid grid-cols-2">
        <div>
          <h4 class="text-2xl font-bold mb-5">آراء العملاء</h4>
          <p class="text-accent">
            تقييم عملائنا لخدمات وريد بكل شفافية وموضوعية نعرضها لكم هنا
          </p>
        </div>
      </div>

      <div class="swiper mt-16" style="position: unset">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(opinion, i) in opinions" :key="i">
            <div class="box bg-light border rounded-2xl p-5 mt-14">
              <img
                :src="`/img/${opinion.img}`"
                alt="Visit service icon"
                class="cust-img w-28 h-24 absolute"
              />
              <img
                src="/img/rating.svg"
                alt="Visit service icon"
                class="h-4 mt-7 mb-5 mx-auto"
              />
              <p class="text-accent mb-10 text-center">{{ opinion.desc }}</p>
              <div class="cust-name text-center">
                <span class="ml-2">{{ opinion.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.opinions {
  .swiper-container {
    height: max-content;
    overflow-y: visible;
    overflow-x: clip;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: transparent;
    border: 1px solid rgba($color: #95389e, $alpha: 0.2);
    width: 45px !important;
    height: 45px !important;
    top: 0 !important;
    left: 0 !important;
    bottom: unset !important;
  }

  .swiper-button-prev {
    left: 60px !important;
    right: unset !important;
  }

  .swiper-button-next {
    left: 0 !important;
  }

  .swiper-slide {
    height: auto;
    overflow: visible;
    .box {
      position: relative;
      height: 100%;
      width: 100%;
      border-color: rgba($color: #000000, $alpha: 0.1);
      .cust-img {
        left: calc(50% - 56px);
        top: -56px;
        z-index: 1000;
      }
      .cust-name {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
      }
    }
  }
}
</style>
