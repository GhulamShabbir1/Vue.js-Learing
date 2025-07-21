<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AppNavbar msg="this Add by me"/>
    <Navbar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppNavbar from './components/AppNavbar.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    AppNavbar
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
