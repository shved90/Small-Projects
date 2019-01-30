<template>
  <v-container grid-list-md class="banner">
    <v-layout row wrap>
      <v-flex sm7>
        <h1>Speed, Simplicity, Knowledge, Choice.</h1>
        <p>Embrace the world of in-store, mobile and online with one simple integration with Creditcall Semi-Integrated.</p>
      </v-flex>
    </v-layout>
    <slideDetails/>
    <slideContact/>
  </v-container>
</template>

<script>
import slideDetails from './slideDetails.vue'
import slideContact from './slideContact.vue'

export default {
  name: 'banner',
  components: {
    slideDetails, slideContact
  }
}
</script>

<style scoped>

  .banner{
    color: white;
    text-align: left;
  }

  h1{
    font: 300 60px/56px 'SimpleSans';
    margin-bottom: 30px;
  }

  p{
    font: normal 20px/24px 'SimpleSans';
    margin-bottom: 30px;
  }

</style>