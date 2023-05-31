<script setup>
import { inject } from 'vue'
import Header from '../components/Header.vue'

const emitter = inject('event')

const handleClick = () => emitter.emit('cliked')
</script>
<template>
  <Header @click="handleClick" />
  <main @click="handleClick">
    <router-view />
  </main>
</template>
