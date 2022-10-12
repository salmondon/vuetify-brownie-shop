<template>
  <v-app>
    <v-app-bar app color="brown">
      <div>
        <v-img class="shrink mr-2" contain
        src="./assets/brownie.png" transition="scale-transition" width="50">
        </v-img>
      </div>
      <div>
        <span class="font-weight-thin text-h3 white--text">Brownie</span>
      </div>

      <template v-slot:extension>
        <v-tabs dark>
          <v-tab :to="links[0].route">Menu</v-tab>
          <v-tab :to="links[1].route">About</v-tab>
          <v-tab :to="links[2].route">Admin</v-tab>
        </v-tabs>
        <v-btn color="primary" @click="checkOut">
          <v-icon>
            mdi-cart
          </v-icon>
          <span>Checkout</span>
        </v-btn>
      </template>

    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      cart: [
      ],
      links: [
        { name: 'Product', icon: 'mdi-home', route: '/product' },
        { name: 'About', icon: 'mdi-information-outline', route: '/about' },
        { name: 'Admin', icon: 'mdi-home', route: '/admin' },
      ],
    };
  },
  methods: {
    checkOut() {
      this.$router.push(
        {
          path: '/cart',
          // query: { cart: this.cart },
        },
      );
    },
  },
};
</script>
