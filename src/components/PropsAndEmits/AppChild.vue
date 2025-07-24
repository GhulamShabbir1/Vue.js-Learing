<template>
    <div>
        <div>
            <h1 v-for="(user, index) in arr" :key="index">
                {{ user.name }}
            </h1>
            <h1>
                send data from Child to Parents
            </h1>
            <button @click="updatestatus">Pass to parents</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppChild',
    props: {
        arr: {
            type: Array,
            required: true
        }
    },
    methods: {
        updatestatus(){
            this.$emit("updatestatus","updateParent")
        }
    }
}
</script>
