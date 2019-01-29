<template>
  <v-container grid-list-md class="infoPanel">
    <v-layout row wrap v-bind:class="{imageRight}">
      <v-flex sm5>
        <div class="diagram">
        <img class="diagramImage" src="../assets/srsBzns.png" />
        </div>
      </v-flex>
      <v-flex sm7>
        <h2>We help businesses grow through data driven decision making with one easy integration.</h2>
        <p>Our multi-channel payment gateway allows merchants to report across multiple devices and multiple platforms so that they can benefit from better insights about their customers no matter on what channel they engage with their customers, now or in the future.</p>
        <p>Our integration will add EMV payments to your POS or mPOS solution with access to a multitude of payment devices which are already pre-certified with multiple processors, applicable in multiple verticals across multiple regions.</p>
        <mainBtn text="try before you buy" color="#004165" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import mainBtn from './mainBtn.vue'

export default {
  name: 'infoPanel',
  props: {
    imageRight: Boolean,
  },
  components: {
    mainBtn
  }
}
</script>

<style scoped>

  .infoPanel{
    padding: 80px 0;
    display: flex;
    min-height: 80vh;
    color: white;
    text-align: left;
  }

  .infoPanel .imageRight {
    flex-direction: row-reverse;
  }

  .infoPanel .diagram{
    text-align: center;
  }

  .infoPanel .diagramImage{
    height: 520px;
  }

  h2{
    font: 300 40px/46px 'SimpleSans';
    margin-bottom: 30px;
    color: #004165;
  }

  p{
    font: normal 20px/28px sans-serif;
    margin-bottom: 30px;
    color: #75838a;
  }

</style>