<template>
  <div id="app">
    <router-view></router-view>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppNavbar msg="{this is prop add by me}" />
    <AppEvent />
    <AppConditional />
    <AppIterators/>
    <AppTwoWayBounding/>
    <AppBind/>
    <!-- <AppParents msg="Rest in Peace Props"/> -->
    <AppParents v-bind:msg="name"/>
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
 import AppParents from './components/PropsAndEmits/AppParents.vue';



export default {
  name: 'App',
  components: {
    HelloWorld,
    AppNavbar,
    AppEvent,
    AppConditional,
    AppIterators,
    AppTwoWayBounding,
    AppBind,
    AppParents
  },
  data(){
    return {
      name:" Ghulam Shabir",
    }
  }
}
</script>

