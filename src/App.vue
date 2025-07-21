<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AppNavbar msg="this Add by me"/>
    <AppEvent/>
    <AppConditional/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppNavbar from './components/AppNavbar.vue';
import AppEvent from './components/AppEvent.vue';
import AppConditional from './components/AppConditional.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppNavbar,
    AppEvent,
    AppConditional
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
