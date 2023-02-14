<script setup lang="ts">
import callToAction from "../core/call-to-action.vue";
</script>

<template>
  <div
    class="features w-full bg-gray-100 mt-10 py-24 overflow-hidden relative z-10"
    id="features"
  >
    <!-- <h1 class="text-center font-bold text-4xl mb-10">مختبرات وريد الطبية</h1> -->
    <div class="container grid lg:grid-cols-2 gap-16">
      <div class="content w-full h-full flex flex-col justify-center">
        <h2 class="text-dark font-bold text-3xl">
          في رحلتنا <span class="text-secondary"> وتميزنا ؟</span>
        </h2>

        <ul class="my-8">
          <li>باقات و تقارير دقيقة</li>
          <li>الإشراف الطبي المتميز</li>
          <li>استجابة سريعة</li>
          <li>
            نضمن لك حصولك على النتائج في وقت قياسي من خلال قنوات تواصل متعددة.
          </li>
          <li>
            برنامج بطاقات ود وريد لعملائنا المميزين
            <!-- <span> بطاقة خصم تتيح لك استرجاع 10% من قيمة تحليلك كرصيد نقاط على البطاقة، ويمكنك الاستفادة منها عند القيام بالتحليل مرة اخرى واستبدالها، حيث ان كل نقطة تعادل واحد ريال.</span> -->
            <a
              href="https://enroll2.brand-wallet.com/XNLI5ZF4Mq"
              target="_blank"
              class="text-primary font-bold"
              >اطلبها الآن</a
            >
          </li>

          <li>حلول صحية</li>
        </ul>

        <call-to-action title="حجز موعد" />
      </div>

      <div class="grid grid-cols-2 gap-4 md:h-auto h-96">
        <div class="feature">
          <div
            class="bg-light flex flex-col justify-center items-center w-52 h-56 absolute left-0 bottom-0"
            style="border-radius: 50% 50% 50% 0"
          >
            <img src="/img/feat_1.png" alt="feature image" />
            <span class="mt-3 text-sm">كفاءة وفاعلية الأجهزة</span>
          </div>
        </div>

        <div class="feature">
          <div
            class="bg-light flex flex-col justify-center items-center md:w-36 h-40 absolute right-0 bottom-0"
            style="border-radius: 50% 50% 0 50%"
          >
            <img src="/img/feat_2.png" alt="feature image" />
            <span class="mt-3 text-sm">جودة ودقة النتائج</span>
          </div>
        </div>

        <div
          v-scroll-to="{ el: `#contact`, offset: -100 }"
          class="feature appoint cursor-pointer"
        >
          <div
            class="bg-primary flex flex-col justify-center items-center w-40 h-44 absolute left-0 top-0"
            style="border-radius: 0 50% 50% 50%"
          >
            <div
              class="bg-light bg-opacity-40 w-1/3 h-1/3 absolute top-2 left-2"
              style="border-radius: 0 50% 50% 50%"
            ></div>
            <span class="mt-3 text-sm text-light"> احجز موعد الآن</span>
          </div>
        </div>

        <div class="feature">
          <div
            class="bg-light flex flex-col justify-center items-center w-44 h-48 absolute right-0 top-0"
            style="border-radius: 50% 0 50% 50%"
          >
            <img src="/img/feat_3.png" alt="feature image" />
            <span class="mt-3 text-sm">الإشراف الطبي المتميز</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.features {
  background-color: #f7f8fd;

  .feature {
    position: relative;
  }
  .feature.appoint {
    &:hover {
      animation: rotateStorm 0.7s ease-in-out both;

      span {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
      }
    }
  }
  ul {
    list-style-image: url("/img/list_img.png");
    list-style-position: inside;
    li {
      margin-bottom: 10px;
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
  .features .image-content {
    img {
      object-position: center;
    }
  }
}
</style>
