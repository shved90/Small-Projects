<template>
  <v-toolbar flat fixed class="mainNav">
    <v-toolbar-title>creditcall</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <mainBtn text="Sign in" link="other" color="white" outline />
  </v-toolbar>
</template>

<script>
import mainBtn from './mainBtn.vue'

export default {
  name: 'toolbar',
  components: {
    mainBtn
  },
}

window.onscroll = () => {
  const nav = document.querySelector('.v-toolbar');
  if(window.scrollY <= 60) nav.classList.remove('scrollActive'); else nav.classList.add('scrollActive');
};
</script>

<style>
  nav.v-toolbar.mainNav {
    background-color: transparent;
  }

  .mainNav .v-btn__content{
    color: white;
  }

  nav.v-toolbar.scrollActive{
    background-color: #084892;
    color: white;
  }

  nav .mainBtn{
    border: 1px solid white;
  }
</style>
