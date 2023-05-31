<script setup>
import Cards from '../components/Cards.vue'
import Circle from '../components/Circle.vue'
</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-wrapper__left">
      <img src="../assets/images/hero.png" alt="" />
    </div>
    <div class="hero-wrapper__right">
      <h1>Доставка готової їжі в Кієві</h1>
      <p>
        Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь смачними стравами без необхідності готувати
        самостійно.
      </p>
    </div>
  </div>
  <Cards />
  <Circle />
</template>
<style lang="scss" scoped>
.hero-wrapper {
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__left {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &__right {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 156px;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 15px;
    }
    h1 {
      font-size: 76px;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 40px;
      }
      @media (max-width: 1200px) {
        font-size: 52px;
      }
    }
    p {
      padding-top: 30px;
      font-size: 18px;
      line-height: 25.2px;
    }
  }
}
</style>
