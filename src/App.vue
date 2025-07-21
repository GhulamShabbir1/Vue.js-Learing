<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppNavbar msg="{this is prop add by me}" />
    <AppEvent />
    <AppConditional />
    <AppIterators/>
    <AppTwoWayBounding/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppNavbar from './components/AppNavbar.vue';
import AppEvent from './components/AppEvent.vue';
import AppConditional from './components/AppConditional.vue';
import AppIterators from './components/AppIterators.vue';
import AppTwoWayBounding from './components/AppTwoWayBinding.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    AppNavbar,
    AppEvent,
    AppConditional,
    AppIterators,
    AppTwoWayBounding
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
