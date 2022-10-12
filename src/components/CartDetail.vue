<template>
    <v-container>
        <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cart"
            :key="item.name"
          >
            <td>{{ item.product.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ parseInt(item.quantity) * parseInt(item.product.price) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <span>
      Total: {{computedTotal}} THB
    </span>
    <v-text-field v-model="tel" label="Phone Number"></v-text-field>
    <v-row class="my-5" justify="space-around">
        <v-btn color="primary" @click="confirm">
        Confirm
    </v-btn>
    <v-btn @click="clear" color="secondary">
        Clear
    </v-btn>
    </v-row>
    </v-container>
  </template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.cart = this.$store.state.cart;
  },
  data() {
    return {
      cart: [],
      price: 0,
      tel: '',
    };
  },
  computed: {
    computedTotal() {
      let sum = 0;
      for (let i = 0; i < this.cart.length; i += 1) {
        sum += this.cart[i].product.price * this.cart[i].quantity;
      }
      return sum;
    },
  },
  methods: {
    getSum(total, num) {
      return total + Math.round(num);
    },
    clear() {
      this.cart = [];
      this.$store.state.cart = [];
    },
    confirm() {
      return axios.post(
        'http://localhost:8090/api/order',
        {
          price: this.computedTotal,
          tel: this.tel,
        },
      ).then((response) => {
        console.log(response);
        this.clear();
      });
    },
  },
};
</script>
