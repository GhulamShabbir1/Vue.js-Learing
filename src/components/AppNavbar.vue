<template>
    <div>
        <h1>this is {{ msg }}</h1>
    </div>
</template>

<script>
export default {
    Name: 'AppNavbar',
    props: {

        msg: String
    }
}
</script>