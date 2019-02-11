<template>
  <div class="home">
    <p class="lolz">pls dont touch 5th column 😹 its on fire 🔥</p>
    <spinner v-if="loader" />
    <listItem v-on:loadingState="updateLoader($event)" />
  </div>
</template>

<script>
import listItem from "@/components/listItem.vue";
import spinner from "@/components/spinner.vue";

export default {
  name: "home",
  components: {
    listItem,
    spinner
  },
  data() {
    return {
      loader: true
    };
  },
  methods: {
    updateLoader(updated) {
      this.loader = updated;
    }
  }
};
</script>

<style>
.home {
  width: 1000px;
  margin: 0 auto;
}

.lolz {
  text-align: right;
}
</style>
