<template>
<div>
    <p>{{ message }}</p>
    <input v-model="message" type="text">
</div>
</template>

<script>
export default{
    Name:'AppTwoWayBounding',
    data(){
        return{
            message:"Enter you want"
        }
    }
}
</script>