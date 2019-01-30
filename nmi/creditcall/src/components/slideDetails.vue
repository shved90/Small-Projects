<template>
  <v-layout wrap>
    <mainBtn text="try before you buy" color="green" @click.native.stop="details = !details"/>
    <v-navigation-drawer v-model="details" absolute temporary width="500">
      <formDetails/>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import mainBtn from "./mainBtn.vue";
import formDetails from "./formDetails.vue";

export default {
  name: "slideDetails",
  components: {
    mainBtn, formDetails
  },
  data() {
    return {
      details: null,
    };
  },
};
</script>
