<script setup lang="ts"></script>

<template>
  <div
    class="services w-full py-24 overflow-hidden relative z-10"
    id="services"
  >
    <div class="container relative">
      <div class="grid lg:grid-cols-2 gap-x-16">
        <div class="content w-full h-full flex flex-col justify-center">
          <h2 class="text-dark font-bold text-2xl">
            خدمات تضمن راحتك، <span class="text-primary"> وضمان صحتك</span>
          </h2>

          <p class="text-accent opacity-80 mt-5 mb-10 w-full">
            حيث نقوم بتوفير مجموعة واسعة من الفحوصات الدورية والشاملة التي تتيح
            لك تتبع صحتك الجسدية العامة، وبالتالي الوقاية من الأمراض
          </p>
        </div>
      </div>

      <div class="swiper" style="position: unset">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              class="box bg-light rounded-xl p-7 flex flex-col justify-start relative"
            >
              <img
                src="/img/services/visit_icon.svg"
                alt="Visit service icon"
                class="w-28 h-24"
              />
              <h4 class="text-lg font-bold my-3">خدمة الزيارة المنزلية</h4>
              <p class="text-accent mb-10">
                نوفر خدمة الزيارة المنزلية لسحب العينات عن طريق فريق من
                الاخصائين و الممارسين الصحين المؤهلين جيدا لتقدم الخدمة بدقة و
                عناية كاملة .<br />
                الزيارة المنزلية مجانية مع باقات وريد المتقدم , المتطور , الراقي
                او ما يعادلها .
              </p>

              <div
                class="flex justify-start items-center absolute bottom-7 right-7"
              >
                <span class="ml-2"
                  ><img src="/img/services/more.svg" alt="More icon"
                /></span>
                <span
                  v-scroll-to="{ el: `#contact`, offset: -100 }"
                  class="cursor-pointer text-primary"
                  >حجز موعد</span
                >
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              class="box bg-light rounded-xl p-7 flex flex-col justify-start relative"
            >
              <img
                src="/img/services/visit_icon.svg"
                alt="Visit service icon"
                class="w-28 h-24"
              />
              <h4 class="text-lg font-bold my-3">خدمة العيادة الافتراضية</h4>
              <p class="text-accent mb-10">
                الأن تستطيع مراجعة طبيب مختص من منزلك عن طريق الطب الاتصالي بعد
                صدور نتائجك لشرحها لك لتشخيص حالتك الصحية .<br />
                العيادة الافتراضية مجانية مع باقات وريد المتقدم , المتطور ,
                الراقي او ما يعادلها .
              </p>
              <div
                class="flex justify-start items-center absolute bottom-7 right-7"
              >
                <span class="ml-2"
                  ><img src="/img/services/more.svg" alt="More icon"
                /></span>
                <span
                  v-scroll-to="{ el: `#contact`, offset: -100 }"
                  class="cursor-pointer text-primary"
                  >حجز موعد</span
                >
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              class="box bg-light rounded-xl p-7 flex flex-col justify-start relative"
            >
              <img
                src="/img/services/visit_icon.svg"
                alt="Visit service icon"
                class="w-28 h-24"
              />
              <h4 class="text-lg font-bold my-3">خدمة الاستشارات الطبية</h4>
              <p class="text-accent mb-10">
                وهي خدمة مقدمة قبل اجراء التحاليل لاستشارة اطباؤنا و معرفة
                احتياجك من الفحوصات الطبية التي تود اجرائها لتحصل على اقصي
                استفادة منها .
              </p>
              <div
                class="flex justify-start items-center absolute bottom-7 right-7"
              >
                <span class="ml-2"
                  ><img src="/img/services/more.svg" alt="More icon"
                /></span>
                <span
                  v-scroll-to="{ el: `#contact`, offset: -100 }"
                  class="cursor-pointer text-primary"
                  >حجز موعد</span
                >
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              class="box bg-light rounded-xl p-7 flex flex-col justify-start relative"
            >
              <img
                src="/img/services/visit_icon.svg"
                alt="Visit service icon"
                class="w-28 h-24"
              />
              <h4 class="text-lg font-bold my-3">
                خدمة الاشتراك السنوي فى البرامج الصحية
              </h4>
              <p class="text-accent mb-10">
                لأن دائما صحتك وريدنا يمكنك الان الاشتراك فى احد البرامج الصحية
                للمتابعة على مدار العام و الفحص اكثر من مرة خلال العام مع جدولة
                الزيارات المنزلية اذا كان لديك الرغبة فى ذلك .
              </p>
              <div
                class="flex justify-start items-center absolute bottom-7 right-7"
              >
                <span class="ml-2"
                  ><img src="/img/services/more.svg" alt="More icon"
                /></span>
                <span
                  v-scroll-to="{ el: `#contact`, offset: -100 }"
                  class="cursor-pointer text-primary"
                  >حجز موعد</span
                >
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              class="box bg-light rounded-xl p-7 flex flex-col justify-start relative"
            >
              <img
                src="/img/services/visit_icon.svg"
                alt="Visit service icon"
                class="w-28 h-24"
              />
              <h4 class="text-lg font-bold my-3">خدمة الدفع على مراحل</h4>
              <p class="text-accent mb-10">
                حلل الان وادفع لاحقا مع خدمة التقسيط مع تمارا لباقات وريد
                المتقدم , المتطور , الراقي او ما يعادلها .
              </p>
              <div
                class="flex justify-start items-center absolute bottom-7 right-7"
              >
                <span class="ml-2"
                  ><img src="/img/services/more.svg" alt="More icon"
                /></span>
                <span
                  v-scroll-to="{ el: `#contact`, offset: -100 }"
                  class="cursor-pointer text-primary"
                  >حجز موعد</span
                >
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
.services {
  background-color: #f7f8fd;

  .swiper {
    .swiper-slide {
      height: auto;

      .box {
        height: 100%;
        border: 1px solid rgba($color: #000000, $alpha: 0.05);
      }
    }
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
  .image-content {
    img {
      animation: translateY 1s linear infinite;
    }
  }
}

@media (max-width: 500px) {
  .services {
    .swiper-button-next,
    .swiper-button-prev {
      top: 130px !important;
    }
  }
}
</style>
