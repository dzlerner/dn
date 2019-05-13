<template>
  <div class="grid">
    <h1>Products List</h1>
    <ul class="products auto-grid">
      <product-card
        v-for="product in products"
        :image="product.masterData.current.masterVariant.images[0].url"
        :title="product.masterData.current.name.en"
      />
      <Trigger @triggerIntersected="loadMore"/>
    </ul>

  </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import ProductCard from './Product/ProductCard.vue'
import Trigger from "./Trigger.vue";

export default {
  name: 'Grid',
  data () {
    return {
      products : [],
      offset: 10,
    }
  },

  components: {
    Trigger
  },

  async mounted() {
    try {
      const { data } = await axios({
        url: 'https://api.commercetools.co/nuts-custom-demo-1/products?offset=0&limit=10',
        method: 'get',
        headers: {
          'Authorization': 'Bearer '+this.$apiKey
        }
      });
      this.products = data.results;
      console.log(this.products);
    } catch (error) {
      throw error;
    }
  },

  methods: {
    async loadMore() {
      this.offset += 10;

      const { data } = await axios({
        url: `https://api.commercetools.co/nuts-custom-demo-1/products?offset=${this.offset}&limit=10`,
        method: 'get',
        headers: {
          'Authorization': 'Bearer '+this.$apiKey
        }
      });

      this.products = [...this.products, ...data.results];
    }
  }
};

new Vue({
    el: '#app',
    data: {
        isOpen: false
    },
    methods:{
        toggle: function(){
            this.isOpen = !this.isOpen
        }
    }
});

</script>

<style lang="scss">

  .auto-grid {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: .8rem;
    padding: 0 .8rem;
  }

</style>
