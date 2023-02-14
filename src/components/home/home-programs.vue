<script setup lang="ts"></script>

<template>
  <div
    class="programs w-full py-24 overflow-hidden relative z-10"
    id="programs"
  >
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-x-16">
        <div class="content w-full h-full flex flex-col justify-center">
          <h2 class="text-dark font-bold text-2xl">
            برامج وريد <span class="text-secondary"> لجودة الحياة</span>
          </h2>

          <h4 class="text-primary mt-5 font-bold text-xl">
            في وريد نهدف لتحسين جودة حياتك
          </h4>
          <p class="text-accent opacity-80 my-5 w-full">
            مجموعة من البرامج التي تقدم باقات التحاليل الشاملة الدورية لتحسين
            جودة حياتك الصحية
          </p>

          <nuxt-link
            to="/packages"
            class="mt-8 btn-shape text-light font-bold bg-primary overflow-hidden rounded relative z-10 flex justify-center items-center content-center"
          >
            <img
              src="/img/icon.svg"
              class="w-5 h-5 object-contain ml-3"
              alt="app.title"
            />

            <span>صمم باقتك</span>
          </nuxt-link>
        </div>

        <div
          class="flex items-center md:justify-end justify-center w-full md:mt-0 mt-10"
        >
          <img src="/img/programs_img.png" class="" alt="programs image" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-5 gap-8 mt-20">
        <div class="program rounded-2xl p-5 relative">
          <div class="flex flex-col items-center pro-head">
            <h5 class="text-base font-extrabold mb-2">
              برامج وريد لجودة الحياة
            </h5>
            <span class="text-accent text-sm mb-3"
              >ستة برامج متنوعة تهدف إلى تحسين جودة حياتك الصحية تم اختيارها
              بعناية من قبل أطبائنا المختصين.</span
            >
          </div>

          <ul class="mb-16 mt-7 text-sm">
            <li>برنامج وريد الأساسي (يشمل 5 باقات تضم 10 تحاليل)</li>
            <li>وريد الأساسي بلس (يشمل 6 باقات تضم 20 تحليل)</li>
            <li>البرنامج القياسي (يشمل 7 باقات تضم 30 تحليل)</li>
            <li>البرنامج المتقدم (يشمل 11 باقة تضم 40 تحليل)</li>
            <li>البرنامج المتطور (يشمل 16 باقة تضم 50 تحليل)</li>
            <li>البرنامج الراقي (يشمل 18 باقة تضم 60 تحليل)</li>
          </ul>

          <button
            v-scroll-to="{ el: `#contact`, offset: -100 }"
            class="btn-shape bg-secondary overflow-hidden rounded-xl absolute bottom-5 left-0 right-5 flex justify-center items-center content-center"
          >
            <img
              src="/img/sec_icon.svg"
              class="w-6 h-6 object-contain ml-3"
              alt="Wareed app"
            />
            <span class="text-base font-bold text-light">اطلب الخدمة</span>
          </button>
        </div>

        <div class="program rounded-2xl p-5 relative">
          <div class="flex flex-col items-center pro-head">
            <h5 class="text-base font-extrabold mb-2">برامج وريد المتخصصة</h5>
            <span class="text-accent text-sm mb-3"
              >مجموعة من الباقات مختصة بفحوصات أعراض او أعضاء الجسم المختلفة
              كمثال :</span
            >
          </div>

          <div class="flex text-sm mt-7 mb-16">
            <ul class="">
              <li>الأمراض المعدية</li>
              <li>الحساسية</li>
              <li>السكرى</li>
              <li>الفيتامينات</li>
              <li>الجهاز الهضمي</li>
              <li>الخصوبة</li>
              <li>تساقط الشعر</li>
              <li>صحة الكبد، الكلي، القلب، الغدة الدرقية، فقر الدم</li>
            </ul>

            <ul class="">
              <li>متابعة دواء الركوتان</li>
              <li>صحة الطفل</li>
              <li>الروماتزم – العظام</li>
              <li>اللياقة البدنية</li>
              <li>الغدة الدرقية</li>
              <li>عدم التحمل الغذائي</li>
              <li>تحاليل الإجهاض المتكرر</li>
            </ul>
          </div>

          <button
            v-scroll-to="{ el: `#contact`, offset: -100 }"
            class="btn-shape bg-secondary overflow-hidden rounded-xl absolute bottom-5 left-0 right-5 flex justify-center items-center content-center"
          >
            <img
              src="/img/sec_icon.svg"
              class="w-6 h-6 object-contain ml-3"
              alt="Wareed app"
            />
            <span class="text-base font-bold text-light">اطلب الخدمة</span>
          </button>
        </div>

        <div class="program rounded-2xl p-5 relative">
          <div class="flex flex-col items-center pro-head">
            <h5 class="text-base font-extrabold mb-2">
              برنامج دعم وريد للاشتراك السنوي
            </h5>
            <span class="text-accent text-sm mb-3">برامج دعم وريد</span>
          </div>

          <ul class="mb-16 mt-7 text-sm">
            <li>
              اشتراك سنوي لمتابعة السكري والدهون 299ريال 3 زيارات السكر التراكمي
              الكوليسترول الدهون الثلاثية سكر الدم تحليل البول
            </li>
            <li>
              اشتراك سنوي لمتابعة دواء الروكتان 299ريال 3 زيارات صورة الدم كاملة
              وظائف الكلي وظائف الكبد الكوليسترول الدهون الثلاثية.
            </li>
            <li>
              اشتراك متابعة صحة الغدة الدرقية 399ريال 3 زيارات الهرمون المحفز
              للغدة الدرقية الهرمون الحر للغدة الدرقية.
            </li>
            <li>
              اشتراك متابعة ضغط الدم 399ريال 3 زيارات صورة الدم كاملة وظائف
              الكلى أملاح الدم باقة الدهون البول.
            </li>
          </ul>

          <button
            v-scroll-to="{ el: `#contact`, offset: -100 }"
            class="btn-shape bg-secondary overflow-hidden rounded-xl absolute bottom-5 left-0 right-5 flex justify-center items-center content-center"
          >
            <img
              src="/img/sec_icon.svg"
              class="w-6 h-6 object-contain ml-3"
              alt="Wareed app"
            />
            <span class="text-base font-bold text-light">اطلب الخدمة</span>
          </button>
        </div>

        <nuxt-link
          to="/packages"
          class="program p-10 rounded-2xl bg-secondary cursor-pointer"
        >
          <div
            class="design flex flex-col items-center justify-center w-full h-full relative"
          >
            <h5 class="text-3xl font-extrabold mb-2 text-primary">صمم باقتك</h5>
            <span class="text-light text-base mb-3 text-center"
              >إيماناً منا بوعيك الصحي وتقديراً منا لاحتياجك الفعلي، جعلنا لك
              الخيار في التحاليل التي تودّ إجراءها</span
            >

            <div
              class="bg-light bg-opacity-25 p-5 rounded-2xl text-light mt-10 w-full text-center"
            >
              <p>
                احصل على خصم 40٪ لمجموعة التحاليل التي تختارها (5 تحاليل فأكثر)
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.programs {
  .program {
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    .pro-head {
      border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    }
  }
  ul {
    list-style-image: url("/img/list_icon.svg");
    list-style-position: inside;
    li {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .design {
    &::after {
      content: "";
      position: absolute;
      background: url("/img/design_img.svg");
      top: 0;
      left: 0;
      width: 215px;
      height: 225px;
    }
  }
  .image-content {
    img {
      animation: translateY 1s linear infinite;
    }
  }
}
@media (max-width: 768px) {
}
</style>
