<template lang="pug">
#app
  CubicBezier
</template>

<script>
import CubicBezier from './components/CubicBezier.vue'
export default {
  name: 'App',
  components: {
    CubicBezier
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
