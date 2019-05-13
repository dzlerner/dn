<script>
import Vue from 'vue'

Vue.component('product-image', {
  props: ['image'],
  template: `
            <div class="product-image">
              <img :src="image" />
            </div>
            `
})

export default {
  name: 'ProductImage'

}
</script>


<style lang="scss">

.product-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 13rem;

  img {
    object-fit: contain;
    object-position: bottom;
    height: 100%;
  }
}

</style>
