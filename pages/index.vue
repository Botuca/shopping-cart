<template>
  <div>
    <section class="text-gray-600">
      <main class="flex h-full bg-gray-200">
        <div class="pt-24 mx-auto">
          <section class="p-4 grid grid-cols-3 justify-items-center gap-4">
            <product-card
              v-for="product in products"
              v-bind="{ product }"
              :key="product.id"
              @click-add="onClickAdd"
            />
          </section>
        </div>
      </main>
    </section>
    <cart
      v-bind="{ showCart }"
      @on-delete-product="onDeleteProduct"
      @close="onShowCart"
    />
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import ProductCard from '../components/product-card.vue';
  import Cart from './cart.vue';

  export default {
    name: 'HomePage',
    components: {
      ProductCard,
      Cart,
    },
    layout: 'base',
    computed: {
      ...mapState('products', ['showCart']),
      ...mapGetters('products', ['products']),
      categorySelected() {
        return this.$route?.query?.category || '';
      },
    },
    async mounted() {
      await this.getProducts(this.categorySelected);
    },
    methods: {
      ...mapActions('products', [
        'getProducts',
        'toggleCart',
        'addProductToCart',
        'deleteProductFromCart',
      ]),
      onShowCart() {
        this.toggleCart();
      },
      onClickAdd(product) {
        !product.isInCart && this.addProductToCart(product);
      },
      onDeleteProduct(product) {
        this.deleteProductFromCart(product);
      },
    },
  };
</script>
