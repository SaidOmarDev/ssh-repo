<script setup lang="ts"></script>

<template>
  <div class="wod w-full py-24 overflow-hidden relative z-10" id="wod">
    <div
      class="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-16"
    >
      <div
        class="image-content flex items-center md:justify-start justify-center w-full"
      >
        <img src="/img/wod_img.jpg" alt="wod image" class="min-h-fit" />
      </div>

      <div
        class="content w-full h-full flex flex-col justify-center md:mt-0 mt-10"
      >
        <h2 class="text-dark font-bold text-2xl">
          <span class="text-secondary"> بطاقة ود وريد</span>
        </h2>

        <h4 class="text-primary mt-5 font-bold text-xl">
          نساعدك في اتخاذ قرارات مستنيرة بشأن صحتك
        </h4>
        <ul class="text-accent opacity-80 my-5 w-full">
          <li>Cashback بقيمة 10% تتحول ك رصيد نقاط في البطاقة .</li>
          <li>كل نقطة واحدة بقيمة ريال .</li>

          <li>يمكنك استخدام النقاط في الزيارة التالية .</li>
          <li>تستبدل النقاط في جميع خدماتنا داخل وخارج المختبر .</li>
          <li>أقصى حد لاستبدال النقاط 1000 نقطة في المرة الواحدة .</li>
          <li>يمكنك الاستفادة من النقاط مدى الحياة .</li>
        </ul>

        <a
          href="https://enroll2.brand-wallet.com/XNLI5ZF4Mq"
          target="_blank"
          class="btn-shape mt-4 text-light font-bold bg-primary overflow-hidden rounded relative z-10 flex justify-center items-center content-center"
        >
          <img
            src="/img/icon.svg"
            class="w-5 h-5 object-contain ml-3"
            alt="app.title"
          />
          <span>اطلبها الآن</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wod {
  .image-content {
    img {
      border-radius: 50% 0 50% 50%;
      width: 520px;
      height: 480px;
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
}

@media (max-width: 768px) {
  .wod {
    .image-content {
      img {
        width: 100%;
        height: 340px;
      }
    }
  }
}
</style>
