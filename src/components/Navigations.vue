<script setup>
const navigations = [
  { name: 'Заклади', url: '/institutions' },
  { name: 'Доставка і оплата', url: '/delivery' },
  { name: 'Акції', url: '/shares' },
  { name: 'Про нас', url: '/about' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="(link, index) in navigations" :key="index">
        <router-link :to="link.url">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: none;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: block;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 32px;
    font-size: 16px;
    font-weight: 500;
    @media (min-width: 1024px) and (max-width: 1199px) {
      font-size: 14px;
    }
    a {
      transition: all 0.2s ease-in;
      display: inline-block;
      transform: scale(1);
      &.router-link-active.router-link-exact-active {
        transform: scale(1.05);
        font-weight: 700;
      }
      &:hover {
        transform: scale(1.05);
        font-weight: 700;
      }
    }
  }
}
</style>
