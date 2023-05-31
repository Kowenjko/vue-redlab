<script setup>
import ToggleButton from '../components/UI/ToggleButton.vue'
import Navigations from '../components/Navigations.vue'

import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
</script>
<template>
  <header :class="{ background: y > 10 }">
    <div class="header container">
      <div class="header-left">
        <div class="header-left__logo">
          <router-link to="/">FoodDeliver</router-link>
        </div>
        <ToggleButton />
      </div>
      <Navigations />
      <div class="header-right">
        <p>+380 67 451 99 57 <span>|</span> 24/7</p>
        <i class="uil uil-bars"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  transition: all 0.4s ease-in;
  z-index: 2;

  &.background {
    background: white;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.07);
  }
  .header {
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
      @media (min-width: 767px) {
        gap: 30px;
      }

      &__logo {
        a {
          font-weight: 700;
          font-family: verdana;
          font-size: 18px;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 16px;
        font-weight: 600;
        display: none;
        span {
          padding: 0 15px;
        }
        @media (max-width: 767px) {
          display: none;
        }
        @media (min-width: 768px) {
          display: block;
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          font-size: 14px;
        }
      }
      i {
        font-size: 24px;
        display: block;

        @media (min-width: 1024px) {
          display: none;
        }
      }
    }
  }
}
</style>
