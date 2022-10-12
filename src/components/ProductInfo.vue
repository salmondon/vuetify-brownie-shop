<template>
    <v-container>
      <!-- {{reviews}} -->
        <v-row class="my-12">
            <v-col cols="6">
                <v-img :src="url" contain max-height="500"></v-img>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col class="" cols="12">
                        <span class="text-h2 overline">
                            {{product.name}}
                        </span>
                    </v-col>
                    <v-col class="" cols="12">
                        <span class="caption">
                            {{product.descr}}
                        </span>
                    </v-col>
                    <v-col class="" cols="12">
                        <div class="">
                            <v-btn class="mx-2" fab dark small
                            color="primary" @click="minus">
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn>
                                <span class="text-subtitle-1">
                                    {{quantity}}
                                </span>
                            </v-btn>
                            <v-btn class="mx-2" fab dark small
                            color="primary" @click="plus">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-8" color="primary" @click="buy">
                                <v-icon >
                                    mdi-cart
                                </v-icon>
                                <span>BUY</span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <span class="text-h3 subtitle-2 justify-center" justify="center">Reviews</span>
          </v-col>

          <v-col v-for="review in reviews" :key="review.id" cols = 12>

          <ReviewInfo v-bind:content="review.content" />
          </v-col>

          <v-text-field v-model="review" label="Write some review!"></v-text-field>
          <v-btn @click="postReview">Add Review</v-btn>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import ReviewInfo from './ReviewInfo.vue';

export default {
  mounted() {
    axios.get(`http://localhost:8090/api/product/${this.$route.params.id}`).then((response) => {
      this.product = response.data;
      // console.log(response.data);
    });
    this.url = this.$route.query.url;
    axios.get(`http://localhost:8090/api/product/${this.$route.params.id}/review`).then((response) => {
      this.reviews = response.data;
      // console.log(response.data);
    });
  },
  data() {
    return {
      review: '',
      reviews: [],
      quantity: 1,
      product: {},
      url: null,
    };
  },
  methods: {
    postReview() {
      axios.post(`http://localhost:8090/api/product/${this.$route.params.id}/review`, {
        content: this.review,
      }).then((response) => {
        this.reviews.push(response.data);
        this.review = '';
      });
    },
    minus() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    plus() {
      this.quantity += 1;
    },
    buy() {
      const orderDetail = {
        product: this.product,
        quantity: this.quantity,
      };
      this.$store.state.cart.push(orderDetail);
    },
  },
  components: { ReviewInfo },
};
</script>
