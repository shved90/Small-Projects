<template>
  <div class="banner-wrapper">
    <toolbar/>
    <banner/>
  </div>
</template>

<script>
import toolbar from './components/toolbar.vue'
import banner from './components/banner.vue'
import 'vuetify/dist/vuetify.min.css'
import './styles/main.css'

export default {
  name: 'main',
  components: {
    toolbar, banner
  }
}
</script>

<style>
.banner-wrapper {
  height: 100vh;
  display: flex;
  background: url('./assets/banner.jpg') top right;
  background-size: cover;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.banner {
  padding-top: 60px;
}
</style>
