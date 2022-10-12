<template>
    <v-container>
        <v-row>
          <v-col v-for="product in products" :key="product.id" cols="4">
            <ProductCard v-bind:id="product.id" v-bind:name="product.name"
            v-bind:description="product.descr"
              v-bind:price="product.price" v-bind:url="product.url" />
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import axios from 'axios';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('http://localhost:8090/api/product').then((response) => {
      this.products = response.data;
      // console.log(response.data);
    });
  },
};
</script>
