<script setup lang="ts">
import { ref } from "vue";
import CallToAction from "@/components/core/call-to-action.vue";

// onMounted: () => {
//   nextTick(function () {
//     window.addEventListener("scroll", function () {
//       let navbar = document.getElementById("nav");
//       let nav_classes = navbar?.classList;
//       if (document.documentElement.scrollTop >= 150) {
//         if (nav_classes?.contains("navscroll") === false) {
//           nav_classes.toggle("navscroll");
//         }
//       } else {
//         if (nav_classes?.contains("navscroll") === true) {
//           nav_classes.toggle("navscroll");
//         }
//       }
//     });
//   });
// };

const showNav = ref(false);
let navLinks = [
  {
    title: "الرئيسية",
    link: "",
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
    title: "عروضنا",
    link: "offers",
  },
  {
    title: "آراء العملاء",
    link: "opinions",
  },
];
</script>

<template>
  <nav
    class="w-full bg-light fixed top-0 left-0 z-50 pb-6 pt-5 border-b border-solid"
    id="nav"
  >
    <div class="container flex justify-between items-center content-center">
      <div
        class="hamburger"
        :class="showNav ? 'active' : ''"
        @click="showNav = !showNav"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <RouterLink to="/">
        <img
          src="/img/logo.svg"
          class="w-32 h-14 object-contain logo"
          alt="Wareed app"
        />
      </RouterLink>

      <ul
        class="navbar-nav flex items-center content-center"
        :class="showNav ? 'active-nav' : ''"
      >
        <li class="ml-8" v-for="(nav, i) in navLinks" :key="i">
          <button
            v-scroll-to="{ el: `#${nav.link}`, offset: -80 }"
            @click="showNav = !showNav"
            class="text-sm nav-link cursor-pointer font-bold text-dark relative z-10"
          >
            {{ nav.title }}
          </button>
        </li>
      </ul>

      <div class="flex nav-action">
        <a
          href="https://results.wareedlabs.com"
          target="_blank"
          class="btn-shape text-light font-bold bg-secondary overflow-hidden rounded relative z-10 flex justify-center items-center content-center ml-2"
        >
          <img
            src="/img/sec_icon.svg"
            class="w-6 h-6 object-contain ml-3"
            alt="Wareed app"
          />
          <span>متابعة تحاليلك</span>
        </a>
        <CallToAction title="حجز موعد" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  transition: all 0.4s linear;
  border-color: rgba($color: #ccb7fa, $alpha: 0.31);

  .logo {
    transition: all 0.3s linear;
  }

  &.navscroll {
    padding: 10px 0px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba($color: #ccb7fa, $alpha: 0.31);

    .logo {
      height: 50px;
    }

    .navbar-nav li .nav-link::after {
      bottom: -10px;
    }
  }

  .hamburger {
    display: none;

    .line {
      width: 30px;
      height: 3px;
      background: var(--primary);
      display: block;
      margin: 8px auto;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      transition: all 0.3s ease-in-out;
      transition-delay: 0.6s;
      transform: rotate(45deg);

      .line {
        &:nth-child(2) {
          width: 0px;
        }

        &:nth-child(3),
        &:nth-child(1) {
          transition-delay: 0.3s;
        }

        &:nth-child(1) {
          transform: translateY(6.5px);
        }

        &:nth-child(3) {
          transform: translateY(-15px) rotate(90deg);
        }
      }
    }
  }

  .navbar-nav li .nav-link {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--primary);
      bottom: -10px;
      transform: scaleX(0);
      left: 0;
      z-index: -1;
      transition: all 0.3s linear;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }
}

@media (max-width: 999px) {
  nav {
    z-index: 99999 !important;

    &.navscroll .navbar-nav {
      top: 60px !important;
    }

    .hamburger {
      display: block !important;
    }

    .navbar-nav {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 88px;
      right: -100%;
      padding: 20px 25px;
      background: #fff;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      transition: all 0.4s linear;
      z-index: 99;

      // &::after {
      //   content: '';
      //   position: absolute;
      //   width: 100%;
      //   height: 100%;
      //   background: url("/img/btn_icon.svg") bottom left/ 70% 70% no-repeat;
      //   opacity: .2;
      //   top: 0;
      //   left: 0;
      //   z-index: -1;
      // }

      li {
        padding: 15px 0px;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.1);

        &:last-child {
          border-bottom: 0px !important;
        }

        a {
          width: 100%;
          text-align: center;
          color: var(--dark);
        }
      }

      &.active-nav {
        right: 0px;
      }
    }

    .nav-action {
      display: none;
    }
  }
}
</style>
