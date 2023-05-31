<script setup>
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  card: { type: Object },
})

const cardRef = ref(null)
const cardIsVisible = useElementVisibility(cardRef)
</script>

<template>
  <div
    :class="['item-warapper', { transition: cardIsVisible }]"
    :style="[{ transition: `all ${cardIsVisible ? card.duration : 0}s ease-in` }]"
    ref="cardRef"
  >
    <img :src="`/src/assets/images/${card.image}`" alt="" />
    <div class="description">{{ card.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.item-warapper {
  transform: translateY(70px);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 328px;
  max-width: 300px;
  background-color: var(--light-grey);
  border-radius: 8px;
  overflow: hidden;

  &.transition {
    transform: translateY(0);
  }
  .description {
    position: absolute;
    padding: 30px;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--purple);
    color: var(--text-white);
    font-size: 16px;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    .description {
      opacity: 1;
    }
  }
}
</style>
