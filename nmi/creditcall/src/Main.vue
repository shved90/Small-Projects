<template>
  <div>
    <div class="banner-wrapper">
      <toolbar/>
      <banner/>
    </div>
    <infoPanel/>
    <infoPanel imageRight/>
  </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import './styles/main.css'
import toolbar from './components/toolbar.vue'
import banner from './components/banner.vue'
import infoPanel from './components/infoPanel.vue'

export default {
  name: 'main',
  components: {
    toolbar, banner, infoPanel
  }
}
</script>

<style>
.banner-wrapper {
  background: url('./assets/banner.jpg') top right;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  text-align: center;
}
.banner {
  padding-top: 60px;
}
</style>
