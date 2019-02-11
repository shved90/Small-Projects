<template>
    <div>
        <v-btn class="mainBtn" dark v-bind:color="color" v-bind:outline="outline">
            <a v-if="link" v-bind:href="link" target="_blank" rel="noopener noreferrer">{{ text }}</a>
            <span v-else>{{ text }}</span>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'mainBtn',
    props: {
        text: String,
        link: String,
        color: String,
        outline: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style>
    .v-btn{
        text-transform: capitalize;
        font-family: sans-serif;
    }
    .v-btn a{
        text-decoration: none;
        color: white;
    }
</style>
