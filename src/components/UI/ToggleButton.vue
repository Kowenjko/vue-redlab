<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>
<template>
  <div class="button-wrapper" @click="checked = !checked">
    <div class="button-wrapper__select" :class="{ transition: checked }"></div>
    <span :class="{ 'text-color': checked }">Доставка</span>
    <span :class="{ 'text-color': !checked }">Самовивіз</span>
  </div>
</template>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  height: 38px;
  width: 210px;
  border: 1px solid var(--middle-grey);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
  display: none;
  @media (min-width: 450px) {
    display: flex;
  }
  &__select {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 50%;
    height: 30px;
    background: var(--purple);
    border-radius: 38px;
    transform: translateX(94%);
    transition: all 0.3s ease-in;
    z-index: -1;
    &.transition {
      transform: translateX(0);
    }
  }
  span {
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease-in;
    &.text-color {
      color: var(--text-white);
    }
  }
}
</style>
