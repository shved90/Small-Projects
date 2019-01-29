<template>
    <div>
        <v-btn dark v-bind:color="color" v-bind:append="link">{{ text }}</v-btn>
    </div>
</template>

<script>
export default {
    name: 'mainBtn',
    props: {
        text: String,
        link: String,
        color: String,
    }
}
</script>
