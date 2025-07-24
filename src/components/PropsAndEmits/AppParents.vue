<template>
<div>
    <h1 v-bind:Name="message"></h1>
    this is parent provide props {{ msg }}
    <AppChild v-bind:arr="arr"/>

    <button @click="onUpdat"></button>
</div>
</template>



<script>

import { onUpdated } from 'vue';
import AppChild from './AppChild.vue'

export default {
    name: 'AppParents',
    components:{
      AppChild
    },
    props: {
    msg: String
  },
  data(){
    return{
        message:"Ghulam Shabbir",
        arr:[
          {name:"Ali"},
          {name:"bob"},
          {name:"alice"}
        ]
    }
  }
}
</script>