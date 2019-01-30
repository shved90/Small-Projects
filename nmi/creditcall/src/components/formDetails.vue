<template>
  <v-form v-model="valid">
    <v-container fluid>
      <v-layout row wraps>
        <v-flex xs12 md6>
          <v-text-field v-model="firstName" label="First name" required></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field v-model="lastName" label="Last name" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md6>
          <v-text-field v-model="company" label="Company"></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wraps>
        <v-flex xs12 md12>
          <v-select v-model="countries" :items="countriesList" label="Country" class="selectWrap" required></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md12>
          <v-select v-model="products" :items="productList" label="Product Interest" class="selectWrap" required></v-select>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn>submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "formDetails",
  data: () => ({
    valid: false,
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    countries: null,
    countriesList: ["United Kingdom", "USSR", "Latvia", "Middle-earth"],
    products: null,
    productList: ["Kernels", "Payment Gateway", "Support", "Other"]
  }),
  methods: {
    clear() {
      (this.firstName = ""),
        (this.lastName = ""),
        (this.company = ""),
        (this.email = ""),
        (this.countries = null),
        (this.products = null);
    }
  }
};
</script>

<style>

  .selectWrap{
    position: relative;
  }

  .selectWrap .v-menu__content {
    top:10px !important;
    left: 0 !important;
  }

</style>
