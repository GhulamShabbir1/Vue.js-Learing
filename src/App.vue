<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppNavbar msg="{this is prop add by me}" />
    <AppEvent />
    <AppConditional />
    <AppIterators/>
    <AppTwoWayBounding/>
    <AppBind/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppNavbar from './components/AppNavbar.vue';
import AppEvent from './components/AppEvent.vue';
import AppConditional from './components/AppConditional.vue';
import AppIterators from './components/AppIterators.vue';
import AppTwoWayBounding from './components/AppTwoWayBinding.vue';
import AppBind from './components/AppBind.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    AppNavbar,
    AppEvent,
    AppConditional,
    AppIterators,
    AppTwoWayBounding,
    AppBind
  }
}
</script>

