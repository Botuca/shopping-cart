<template>
  <section class="text-gray-600">
    <main class="flex">
      <div class="mx-auto">
        <section class="p-4 grid grid-cols-3 justify-items-center gap-4">
          <product-card
            v-for="product in products"
            v-bind="{ product }"
            :key="product.id"
            @click-add="onClickAdd"
            @on-click-product="onClickProduct"
          />
        </section>
      </div>
    </main>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import ProductCard from '../components/product-card.vue';

  export default {
    name: 'HomePage',
    components: {
      ProductCard,
    },
    layout: 'base',
    computed: {
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
      onClickAdd(product) {
        !product.isInCart && this.addProductToCart(product);
      },
      onClickProduct() {
        this.$router.push({
          name: 'product',
        });
      },
    },
  };
</script>
