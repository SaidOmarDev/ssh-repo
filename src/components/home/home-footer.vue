<script setup lang="ts">
import { ref } from "vue";
import { useContact } from "@/composables/useContact";

let { callus, whatsapp, mailto, number, mobile, email } = useContact();

let socailMedia = ref([
  {
    img: "facebook",
    link: "https://www.facebook.com/wareedlabksa",
  },
  {
    img: "twitter",
    link: "https://twitter.com/wareedlab",
  },
  {
    img: "insta",
    link: "https://www.instagram.com/wareedlab/",
  },
  {
    img: "linked",
    link: "https://www.linkedin.com/company/wareedlab/",
  },
]);

let navLinks = ref([
  {
    title: "الرئيسية",
    link: "intro",
  },
  {
    title: "من نحن",
    link: "about",
  },
  {
    title: "خدماتنا",
    link: "services",
  },
  {
    title: "برامجنا",
    link: "programs",
  },
  {
    title: "آراء العملاء",
    link: "opinions",
  },
  {
    title: "حجز موعد",
    link: "contact",
  },
]);
</script>

<template>
  <div>
    <footer class="w-full pt-20 bg-primary relative" id="footer">
      <div class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
          <div class="content">
            <nuxt-link to="/">
              <img
                src="/img/footer_logo.svg"
                class="object-contain logo"
                loading="lazy"
                alt="$t(`app.title`)"
              />
            </nuxt-link>

            <p class="text-base font-normal my-8 text-light text-justify">
              نقوم بتوفير مجموعة واسعة من الفحوصات الدورية والشاملة التي تتيح لك
              تتبع صحتك الجسدية العامة، وبالتالي الوقاية من الأمراض
            </p>

            <div class="flex socail items-center content-center mt-2">
              <a
                v-for="(socail, i) in socailMedia"
                :key="i"
                :href="`${socail.link}`"
                target="_blank"
                class="w-14 h-14 rounded-2xl overflow-hidden flex justify-center items-center content-center bg-primary"
              >
                <img
                  :src="`/img/${socail.img}.svg`"
                  class="w-5 h-5 object-center object-contain"
                  alt="wareed"
                />
              </a>
            </div>
          </div>

          <div class="content lg:pr-24 md:pr-0 sm:pr-0 pr-0">
            <h1 class="text-xl font-bold text-light mb-7">أقسام الموقع</h1>

            <ul class="w-full">
              <li class="mb-4" v-for="(nav, i) in navLinks" :key="i">
                <button
                  v-scroll-to="{ el: `#${nav.link}`, offset: -80 }"
                  class="text-base nav-link cursor-pointer opacity-70 font-semibold text-light relative z-10 hover:opacity-100"
                >
                  {{ nav.title }}
                </button>
              </li>
            </ul>
          </div>

          <div class="content">
            <h1 class="text-xl font-bold text-light mb-7">تواصل معنا</h1>

            <div class="data-contain w-full">
              <button
                @click="callus"
                class="contact-content w-full pb-4 border-b border-solid border-light border-opacity-5 cursor-pointer flex items-start content-start"
              >
                <img
                  src="/img/mobile.svg"
                  loading="lazy"
                  class="w-6 h-6 object-contain ml-4"
                  alt="$t(`app.title`)"
                />

                <div class="text-right">
                  <b
                    class="text-base font-bold text-light opacity-70 mb-2 block"
                  >
                    هاتفيا
                  </b>

                  <p class="text-base font-normal text-light cursor-pointer">
                    {{ number }}
                  </p>
                </div>
              </button>

              <button
                @click="whatsapp"
                class="contact-content w-full pb-4 border-b border-solid border-light border-opacity-5 cursor-pointer flex items-start content-start"
              >
                <img
                  src="/img/whatsapp.svg"
                  loading="lazy"
                  class="w-6 h-6 object-contain ml-4"
                  alt="$t(`app.title`)"
                />

                <div class="text-right">
                  <b
                    class="text-base font-bold text-light opacity-70 mb-2 block"
                  >
                    واتس اب
                  </b>

                  <p class="text-base font-normal text-light cursor-pointer">
                    {{ mobile }}
                  </p>
                </div>
              </button>

              <button
                @click="mailto"
                class="contact-content w-full py-4 border-b border-solid border-light border-opacity-5 cursor-pointer flex items-start content-start"
              >
                <img
                  src="/img/mail.svg"
                  loading="lazy"
                  class="w-6 h-6 object-contain ml-4"
                  alt="$t(`app.title`)"
                />

                <div class="text-right">
                  <b
                    class="text-base font-bold text-light opacity-70 mb-2 block"
                  >
                    البريد الإلكتروني
                  </b>

                  <p class="text-base font-normal text-light cursor-pointer">
                    {{ email }}
                  </p>
                </div>
              </button>

              <a
                href="https://maps.app.goo.gl/DVN68z8b8YHHHCg48"
                target="_blank"
                class="contact-content w-full pt-4 cursor-pointer flex items-start content-start"
              >
                <img
                  src="/img/location.svg"
                  loading="lazy"
                  class="w-6 h-6 object-contain ml-4"
                  alt="$t(`app.title`)"
                />

                <div class="text-right">
                  <b
                    class="text-base font-bold text-light opacity-70 mb-2 block"
                  >
                    العنوان
                  </b>

                  <p class="text-base font-normal text-light cursor-pointer">
                    طريق الملك سلمان بن عبد العزيز حي النرجس - الرياض
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          class="copyrights mt-10 md:py-2 py-5 border-t border-light border-opacity-10 w-full"
        >
          <div
            class="container flex justify-between items-center content-center"
          >
            <p class="text-light text-xs font-normal">
              جميع الحقوق محفوظة موقع وريد @
              {{ new Date().getFullYear() }}
            </p>

            <a
              class="flex items-center content-center"
              href="https://prameg.net/"
              target="_blank"
            >
              <p class="text-light text-xs font-normal rtl:ml-3 ltr:mr-3">
                صُنع في برامج
              </p>

              <img
                alt="نحن شريك في التفكير والتخطيط والتطوير لكل حاجاتك الرقمية والتسويقية، عزز كيانك ببرامج"
                class="w-8 h-8 object-contain"
                src="/img/prameg.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div class="fixed-icons fixed bottom-2 left-3 z-30">
      <button
        @click="whatsapp"
        class="w-12 h-12 flex relative z-10 justify-center items-center content-center rounded-full mb-5"
      >
        <img
          src="/img/footer_whats.svg"
          class="w-5 h-5 object-center object-contain"
          alt="$t(`app.title`)"
        />
      </button>

      <button
        @click="callus"
        class="w-12 h-12 flex relative z-10 justify-center items-center content-center rounded-full"
      >
        <img
          src="/img/form_phone.svg"
          class="w-5 h-5 object-center object-contain"
          alt="$t(`app.title`)"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
footer {
  &::after {
    content: "";
    position: absolute;
    background: url("/img/book_img.svg") no-repeat;
    top: 0;
    left: 0;
    width: 215px;
    height: 90%;
  }

  .socail {
    a {
      margin-inline-end: 15px;
      border: 1px solid rgba($color: #fff, $alpha: 0.25);

      &:last-child {
        margin: 0px !important;
      }

      &:hover img {
        animation: fadeInLeft 0.4s linear;
      }
    }
  }

  .contact-content {
    img {
      transition: all 0.3s linear;
    }

    &:hover {
      b {
        opacity: 1 !important;
      }

      img {
        transform: translateY(10px);
      }
    }
  }
}

.fixed-icons {
  button {
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      top: 0;
      left: 0;
    }

    &::after {
      z-index: -2;
      animation: pulsecust 2s linear infinite alternate;
    }

    &::before {
      z-index: -1;
    }

    &:first-child {
      &::after {
        background-color: var(--primary);
      }

      &::before {
        background-color: var(--secondary);
      }
    }

    &:last-child {
      &::after {
        background-color: var(--secondary);
      }

      &::before {
        background-color: var(--primary);
      }
    }
  }
}

@media (max-width: 999px) {
  footer {
    h1 {
      margin: 10px 0px 20px 0px !important;
    }

    .copyrights {
      div {
        flex-direction: column;
        justify-content: center;

        p {
          margin-bottom: 10px;
          font-size: 12px !important;
        }
      }
    }
  }
}
</style>
