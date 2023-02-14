<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";

let offers = ref([
  {
    image: "offer_1",
    name: "offer1",
    desc: "نخبة من أطباء ممتازة",
    price: "40",
  },
  {
    image: "offer_1",
    name: "offer1",
    desc: "نخبة من أطباء ممتازة",
    price: "40",
  },
  {
    image: "offer_1",
    name: "offer1",
    desc: "نخبة من أطباء ممتازة",
    price: "40",
  },
  {
    image: "offer_1",
    name: "offer1",
    desc: "نخبة من أطباء ممتازة",
    price: "40",
  },
]);
</script>

<template>
  <section class="offers w-full py-12 mb-24 relative" id="offers">
    <div class="container">
      <div class="text-center mb-12 w-full">
        <h1 class="text-3xl font-bold text-primary my-3">عروض وريد</h1>

        <p class="text-base text-secondary font-medium">
          عروض تهدف الي تلبية متطلبات عملائنا بكل حرفيه
        </p>
      </div>

      <div class="w-full overflow-hidden">
        <Swiper class="swiper" :navigation="true" :autoplay="true">
          <SwiperSlide
            class="swiper-slide pt-5"
            v-for="(offer, i) in offers"
            :key="i"
          >
            <div class="box w-full text-center relative overflow-hidden z-10">
              <img
                :src="`${offer.image}`"
                class="w-full h-72 object-contain"
                loading="lazy"
                alt="$t(`app.title`)"
              />

              <div class="content relative z-10 w-full py-6 px-6 bg-light">
                <h2 class="text-dark text-lg font-bold">
                  {{ offer.name }}
                </h2>

                <p class="text-gray text-sm font-medium mt-2 mb-6">
                  {{ offer.desc }}
                </p>

                <div
                  class="w-full flex items-center content-center justify-between"
                >
                  <p class="text-secondary font-bold text-2xl">
                    {{ offer.price }}

                    <span class="text-sm font-medium"> ريال </span>
                  </p>

                  <call-to-action title="اطلب العرض" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.offers {
  border-radius: 30px 30px 0px 0px;
  background-color: #f7fcfb;

  .box {
    border-radius: 30px !important;
    transition: all 0.3s linear;

    .content {
      border-radius: 30px 30px 0px 0px;
      margin-top: -30px;
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
}
</style>
