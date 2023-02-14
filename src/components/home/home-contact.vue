<script setup lang="ts">
import { ref } from "vue";

let done = ref(false);
let cat = ref(null);
let lead = ref({
  gender_id: 1,
  name: null,
  mobile: null,
  branch_id: null,
  mobile_code: 966,
  service_code: null,
  sub_service_code: null,
  home: false,
  address: null,
});

let categories = ref([]);
</script>

<template>
  <section class="contact py-20 w-full bg-primary relative z-10" id="contact">
    <div
      class="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10"
    >
      <div
        class="content w-full h-full flex flex-col justify-center relative z-10"
      >
        <h1 class="text-3xl font-bold text-light mb-3">
          احجز موعد او تواصل معنا
        </h1>
        <p class="text-light">
          نعتمد في معاملنا على أفضل الكوادر الطبية المتميزة، نستطيع مساعدتك
          وتوجيهك .. لا تتردد في التواصل معنا
        </p>
      </div>

      <form v-if="!done" class="form-contain w-full">
        <div class="form-group w-full h-14 relative z-10 mb-8">
          <img
            src="/img/form_user.svg"
            class="w-6 h-6 object-contain absolute right-3 z-30 top-4"
            loading="lazy"
            alt="Wareed app"
          />

          <input
            v-model="lead.name"
            type="text"
            class="form-control relative z-10 w-full h-full rounded-xl px-11"
            placeholder="الاسم"
          />

          <v-error input="name" class="mis-6 mt-1" />
        </div>

        <div class="form-group w-full h-14 relative z-10 mb-8">
          <img
            src="/img/form_email.svg"
            class="w-6 h-6 object-contain absolute right-3 z-30 top-4"
            loading="lazy"
            alt="Wareed app"
          />

          <input
            v-model="lead.mobile"
            type="text"
            class="form-control relative z-10 w-full h-full rounded-xl px-11"
            placeholder="رقم الجوال"
          />

          <v-error input="mobile" class="mis-6 mt-1" />
        </div>

        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="form-group w-full h-14 relative z-10 mb-8">
              <img
                src="/img/form_cat.svg"
                class="w-6 h-6 object-contain absolute right-3 z-30 top-4"
                loading="lazy"
                alt="Wareed app"
              />

              <!-- <select
                v-model="lead.service_code"
                class="form-control relative z-10 w-full h-full rounded-xl px-11"
              >
                <option :value="null">القسم</option>

                <option
                  v-for="service in categories"
                  class="text-dark"
                  :key="service.id"
                  :value="service.slug"
                >
                  {{ service.name }}
                </option>
              </select> -->

              <img
                src="/img/form_arrow.svg"
                class="w-3 h-3 object-contain object-center absolute left-3 z-30 top-6"
                loading="lazy"
                alt="Wareed app"
              />

              <v-error input="service_code" class="mis-6 mt-1" />
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <div class="form-group w-full h-14 relative z-10 mb-8">
              <img
                src="/img/form_cat.svg"
                class="w-6 h-6 object-contain absolute right-3 z-30 top-4"
                loading="lazy"
                alt="Wareed app"
              />

              <!-- <select
                v-model="lead.sub_service_code"
                class="form-control relative z-10 w-full h-full rounded-xl px-11"
              >
                <option :value="null">
                  الخدمة المطلوبة
                  {{ !lead.service_code ? "(حدد القسم أولًا)" : "" }}
                </option>

                <template v-if="cat">
                  <option
                    v-for="service in categories"
                    class="text-dark"
                    :key="service.id"
                    :value="service.slug"
                  >
                    {{ service.name }}
                  </option>
                </template>
              </select> -->

              <img
                src="/img/form_arrow.svg"
                class="w-3 h-3 object-contain object-center absolute left-3 z-30 top-6"
                loading="lazy"
                alt="Wareed app"
              />

              <v-error input="sub_service_code" class="mis-6 mt-1" />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap h-14 mb-8">
          <div class="w-full md:w-1/3">
            <div @click="lead.home = !lead.home" class="mt-3 mr-3 inline-block">
              <input
                type="checkbox"
                v-model="lead.home"
                class="form-check-input relative z-10"
                @click.stop
              />

              <label class="form-check-label text-light mr-2 cursor-pointer">
                زيارة منزلية
              </label>
            </div>
          </div>

          <div class="w-full md:w-2/3">
            <div
              v-show="lead.home"
              class="form-group w-full h-14 relative z-10"
            >
              <input
                v-model="lead.address"
                ref="address"
                type="text"
                class="form-control relative z-10 w-full h-full rounded-xl px-11"
                placeholder="العنوان"
              />

              <v-error input="address" class="mis-6 mt-1" />
            </div>
          </div>
        </div>

        <button
          @click.stop.prevent=""
          class="btn-shape bg-secondary overflow-hidden mt-2 rounded-xl relative z-10 flex justify-center items-center content-center"
        >
          <img
            src="/img/sec_icon.svg"
            class="w-6 h-6 object-contain ml-3"
            alt="Wareed app"
          />
          <span class="text-base font-bold text-light">حجز موعد</span>
        </button>
      </form>

      <div
        v-else
        class="w-full h-full flex flex-col flex-wrap justify-center mb-2"
      >
        <div class="done-state bg-light border-opacity-70 rounded-xl py-8 px-4">
          <h3 class="text-primary font-bold text-center">
            تم التسجيل، سوف يتواصل معك فريقنا قريبًا.
          </h3>

          <img
            src="/img/done.svg"
            class="mt-8 mx-auto"
            width="100"
            alt="$t(`input.done`)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact {
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
  .content {
    padding-inline-start: 89px;
    // &::after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: url('/img/footer_icon.svg') top right/ contain no-repeat;
    //   z-index: -1;
    // }
  }

  .done-state {
    box-shadow: 0 10px 27px rgba($color: #b7b7b7, $alpha: 0.16);
  }

  .form-contain {
    .form-group {
      .form-control {
        background-color: rgba($color: #fff, $alpha: 0.07);
        border: 1px solid rgba($color: #fff, $alpha: 0);
        outline: none;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        appearance: none !important;

        &::placeholder {
          color: #ccb7fa;
          font-size: 14px;
          font-weight: 500;
        }

        &:hover,
        &:focus {
          border: 1px solid rgba($color: #fff, $alpha: 1);
        }
      }
    }

    select,
    option {
      color: #ccb7fa;
    }
  }
}

@media (max-width: 999px) {
  .contact {
    padding: 30px 0px;

    .content {
      padding-inline-start: 40px;

      h1 {
        font-size: 18px !important;
      }
    }
  }
}
</style>
