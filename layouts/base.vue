<template>
  <section>
    <header-base
      v-bind="{ categories }"
      @on-click-icon="toggleCart"
      @on-click-category="onClickCategory"
    />
    <Nuxt class="pt-24 text-gray-600 h-full bg-gray-200" />
    <footer-base />
    <cart
      v-bind="{ showCart }"
      @on-delete-product="onDeleteProduct"
      @close="onShowCart"
    />
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import HeaderBase from '../pages/header.vue';
  import FooterBase from '../pages/footer.vue';
  import Cart from '../pages/cart.vue';

  export default {
    name: 'LayoutBase',
    components: {
      HeaderBase,
      FooterBase,
      Cart,
    },
    computed: {
      ...mapState('products', ['categories', 'showCart']),
    },
    async mounted() {
      await this.getCategories();
    },
    methods: {
      ...mapActions('products', [
        'getCategories',
        'toggleCart',
        'getProducts',
        'deleteProductFromCart',
      ]),
      async onClickCategory(category) {
        this.$router.push({
          path: '/',
          query: {
            category: category || undefined,
          },
        });

        await this.getProducts(category);
      },
      onDeleteProduct(product) {
        this.deleteProductFromCart(product);
      },
      onShowCart() {
        this.toggleCart();
      },
    },
  };
</script>
