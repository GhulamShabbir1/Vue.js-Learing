<template>
<div>
    <img v-bind:src="imgUrl" >
</div>
</template>
<script>
export default{
    Name:"AppBind",
    data(){
        return {
            imgUrl:"https://media.istockphoto.com/id/1424869787/photo/online-chat-speech-bubble-on-laptop-neon-background.jpg?s=612x612&w=0&k=20&c=pSbrqJc3Wch1KXOmkIGokGEIBRiQncG9-RhW66SzCbc="
        }
    }
}
</script>