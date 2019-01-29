<template>
  <v-container grid-list-md class="banner">
    <v-layout row wrap>
      <v-flex sm7>
        <h1>Speed, Simplicity, Knowledge, Choice.</h1>
        <p>Embrace the world of in-store, mobile and online with one simple integration with Creditcall Semi-Integrated.</p>
        <mainBtn text="bob" link="other" color="green" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import mainBtn from './mainBtn.vue'

export default {
  name: 'banner',
  components: {
    mainBtn
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