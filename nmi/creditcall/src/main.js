import Vue from 'vue'
import Vuetify from 'vuetify'
import Main from './Main.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app')
