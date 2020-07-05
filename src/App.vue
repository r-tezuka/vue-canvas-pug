<template lang="pug">
#app
  img(alt='Vue logo', src='./assets/logo.png')
  HelloWorld(msg='Welcome to Your Vue.js App')
  MyCanvas(:radius='radius')
    p
      input(type='range', min='0', max='100', v-model.number='radius')
  p {{ radius }}
  input(v-model='radius')
  MyGraphics
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyCanvas from './components/MyCanvas.vue'
import MyGraphics from './components/MyGraphics.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyCanvas,
    MyGraphics
  },
  data() {
    return {
      radius: 50
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
