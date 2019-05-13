<script>
import Vue from 'vue'

Vue.component('product-info', {
  props: ['title'],
  template: `
            <div class="product-info">
              <span class="product-title">{{ title }}</span>
              <span class="product-price">$7.99</span>
            </div>
            `
})

export default {
  name: 'ProductInfo'

}
</script>

<style lang="scss">

.product-info {
  display: flex;
  flex-direction: column;
  border-top: 1px #333 solid;
  margin-top: 1.6rem;

  .product-title {
    padding: .8rem 0;
  }

  .product-price {
  }

}

</style>
