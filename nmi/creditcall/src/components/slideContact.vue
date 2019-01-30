<template>
  <v-layout wrap>
    <mainBtn text="contact us" color="white" outline @click.native="toggleContact"/>
    <v-navigation-drawer v-model="contact" absolute temporary right width="500">
      <formContact/>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import mainBtn from "./mainBtn.vue";
import formContact from "./formContact.vue";

export default {
  name: "slideContact",
  components: {
    mainBtn, formContact
  },
  data() {
    return {
      contact: null,
      contactWasClosed: false,
    }
  },
   watch: {
    contact (val) {
      if (!val) {
        this.contactWasClosed = true
        setTimeout(() => {
          this.contactWasClosed = false
        }, 0)
      }
    }
  },
  methods: {
    toggleContact () {
      this.contact = !this.contactWasClosed
    }
  }
};
</script>

<style>

</style>
