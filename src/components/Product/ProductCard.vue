<script>
import Vue from 'vue'
import ProductImage from './ProductImage.vue'
import ProductIinfo from './ProductInfo.vue'

Vue.component('product-card', {
  props: ['title', 'image'],
  template: `
            <li class="product-card" >

              <product-image
                :image="image"
              />
              <product-info
                :title="title"
              />

            </li>
            `
})
export default {
  name: 'ProductCard'

}
</script>

<style lang="scss">

.product-card {
  list-style: none;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: .8rem;
}

</style>
