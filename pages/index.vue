<template>
  <div>
    <section class="text-gray-600">
      <header-base @clickIcon="onClickIcon" />
      <main class="flex h-full">
        <div class="absolute left-4 top-20">
          <categories-radio
            v-bind="{ categories, categorySelected }"
            @onChangeCategory="onChangeCategory"
          />
        </div>
        <div class="pt-16 mx-auto">
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
    <cart v-bind="{ showCart }" />
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import ProductCard from '../components/product-card.vue';
  import CategoriesRadio from '../components/categories-radio.vue';
  import HeaderBase from './header.vue';
  import FooterBase from './footer.vue';
  import Cart from './cart.vue';

  export default {
    name: 'HomePage',
    components: {
      ProductCard,
      CategoriesRadio,
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
      ]),
      async onChangeCategory(category) {
        this.$router.push({
          query: {
            category: category || undefined,
          },
        });

        await this.getProducts(category);
      },
      onClickIcon() {
        this.toggleCart();
      },
      onClickAdd(product) {
        !product.isInCart && this.addProductToCart(product);
      },
    },
  };
</script>
