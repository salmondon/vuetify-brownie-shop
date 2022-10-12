<template>
    <v-container>
        <v-text-field v-model="product.url" label="url"></v-text-field>
        <v-text-field v-model="product.name" label="name"></v-text-field>
        <v-text-field v-model="product.price" label="price"></v-text-field>
        <v-text-field v-model="product.descr" label="descr"></v-text-field>
        <v-btn @click="addProduct">add</v-btn>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        descr: '',
        price: '',
        url: '',
      },
    };
  },
  methods: {
    addProduct() {
      return axios.post(
        'http://localhost:8090/api/product/add',
        this.product,
      ).then((response) => {
        console.log(response);
      });
    },
  },

};
</script>
