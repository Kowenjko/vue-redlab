<script setup>
import Card from '../components/Card.vue'
import check from '../assets/images/check.png'
import bowl from '../assets/images/bowl.png'
import roket from '../assets/images/roket.png'
import clock from '../assets/images/clock.png'

const cards = [
  {
    id: 1,
    image: check,
    description:
      'Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
    duration: 0.5,
  },
  {
    id: 2,
    image: bowl,
    description:
      'Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
    duration: 1,
  },
  {
    id: 3,
    image: roket,
    description:
      'Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
    duration: 1.2,
  },
  {
    id: 4,
    image: clock,
    description:
      'Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
    duration: 1.5,
  },
]
</script>
<template>
  <div class="cards-wrapper container">
    <Card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<style lang="scss" scoped>
.cards-wrapper {
  padding: 72px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
