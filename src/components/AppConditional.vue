<template>
    <div>
        <h1 v-if="show">This show when if </h1>
        <h1 v-else>This show when else </h1>
        <p v-show="show">this is v-show methods</p> 
        <button v-on:click="display()">Toggle</button>
    </div>
</template>

<script>
export default {
    Name: "AppConditional",
    data() {
        return { show: false }
    },
    methods: {
        display() {
            this.show = !this.show
        }
    }
}
</script>