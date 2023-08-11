<template>
  <div>
    <section class="text-gray-600">
      <header-base
        v-bind="{ categories }"
        @on-click-icon="onShowCart"
        @on-click-category="onClickCategory"
      />
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
    <footer-base />
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
  import HeaderBase from './header.vue';
  import FooterBase from './footer.vue';
  import Cart from './cart.vue';

  export default {
    name: 'HomePage',
    components: {
      ProductCard,
      HeaderBase,
      FooterBase,
      Cart,
    },
    computed: {
      ...mapState('products', ['categories', 'showCart']),
      ...mapGetters('products', ['products']),
      categorySelected() {
        return this.$route?.query?.category || '';
      },
    },
    async mounted() {
      await this.getProducts(this.categorySelected);
      await this.getCategories();
    },
    methods: {
      ...mapActions('products', [
        'getProducts',
        'getCategories',
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
      async onClickCategory(category) {
        this.$router.push({
          query: {
            category: category || undefined,
          },
        });

        await this.getProducts(category);
      },
      onDeleteProduct(product) {
        this.deleteProductFromCart(product);
      },
    },
  };
</script>
