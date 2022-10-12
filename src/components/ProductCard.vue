<!-- eslint-disable vue/no-dupe-keys -->
<script>
export default {
  props: ['id', 'name', 'description', 'price', 'url'],
  data() {
    return {
    };
  },
  methods: {
    go() {
      this.$router.push({
        path: `/product/${this.id}`,
        query: { url: this.url },
      });
    },
  },
};
</script>

<template>
  <v-card class="mx-auto my-12" max-width="350">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img contain :src="url"></v-img>

    <v-card-title>{{name}}</v-card-title>
    <v-card-subtitle>
      {{price}} THB
    </v-card-subtitle>
    <v-card-actions>
      <v-row class="justify-space-around my-5">
        <!-- <v-btn color="primary" elevation="2" small>
          Add To Cart
        </v-btn> -->
        <v-btn class="" color="secondary" elevation="2" small @click="go">
          More info / Buy
        </v-btn>
      </v-row>

    </v-card-actions>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>
