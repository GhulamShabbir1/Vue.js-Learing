<template>
<div>
    <button v-on:click="HandleClick()">Click Me</button>
</div>
</template>

<script>
export default {
    Name:"AppEvent",
    methods:{
        
        HandleClick() {
            alert("Rest in Peace")
        }
    }
}

</script>