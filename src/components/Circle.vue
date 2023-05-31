<script setup>
import { ref, watch, inject } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useMouse } from '../composables/useMouse'

const circleRef = ref(null)
const isMoved = ref(false)

const { y: scrollY } = useWindowScroll()
const { x, y } = useMouse()

const emitter = inject('event')

const moveText = () => {
  if (!circleRef.value) return
  circleRef.value.style.left = x.value + 30 + 'px'
  circleRef.value.style.top = y.value + 30 + 'px'
  circleRef.value.style.transition = 'none'
  circleRef.value.style.position = 'absolute'
  circleRef.value.style.border = '5px solid var(--light-purple)'
}

emitter.on('cliked', () => {
  isMoved.value = false
  if (!circleRef.value) return
  circleRef.value.style.position = 'fixed'
  circleRef.value.style.top = window.innerHeight - 225 + 'px'
  circleRef.value.style.border = 'none'
  circleRef.value.style.left = '50%'
  circleRef.value.style.transform = 'translate(-50%, 0) scale(1) !important'
  circleRef.value.style.transition = 'all 0.5s ease-in'
})

watch([x, y], () => {
  if (isMoved.value) moveText()
})
</script>
<template>
  <div
    :class="['circle-wrapper', { transition: scrollY > 10 && !isMoved }]"
    ref="circleRef"
    @mouseleave="isMoved = true"
  >
    <span> Замовити доставку </span>
  </div>
</template>

<style lang="scss" scoped>
.circle-wrapper {
  cursor: pointer;
  width: 195px;
  height: 195px;
  background: var(--purple);
  border-radius: 50%;
  position: fixed;
  bottom: 30px;

  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in;
  transform: scale(1) translate(-50%, 0);
  &.transition {
    transform: translate(-50%, 0) scale(0.8);
    left: 50%;
  }

  span {
    font-size: 18px;
    color: var(--text-white);
    line-height: 23.4px;
    font-weight: 600;
    padding: 0 10px;
    text-align: center;
    animation: stretchy 20s infinite linear;
  }
  &:hover {
    transform: translate(-50%, 0) scale(1);
    left: 50%;
  }
}
@keyframes stretchy {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: 90deg;
  }
  50% {
    rotate: 180deg;
  }
  75% {
    rotate: 270deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
