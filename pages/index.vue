<template>
  <section class="text-gray-600">
    <header-base @clickIcon="onClickIcon"/>
    <main>
      <div class="pt-16 flex flex-row justify-center items-start">
        <categories-radio v-bind="{ categories, categorySelected }" @onChangeCategory="onChangeCategory" />
        <section class="p-4 grid grid-cols-3 justify-items-center gap-4">
          <product-card
            v-for="product in products"
            v-bind="{ product }"
            :key="product.id"
          />
        </section>
      </div>
    </main>
    <footer-base />
    <cart v-bind="{ showCart }"/>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductCard from '../components/product-card.vue';
import CategoriesRadio from '../components/categories-radio.vue';
import HeaderBase from './header.vue';
import FooterBase from './footer.vue';
import Cart from './cart.vue';

export default {
  name: "HomePage",
  components: {
    ProductCard,
    CategoriesRadio,
    HeaderBase,
    FooterBase,
    Cart,
  },
  computed: {
    ...mapState('products', ['products', 'categories', 'showCart']),
    categorySelected() {
      return this.$route?.query?.category || '';
    }
  },
  async mounted() {
    await this.getProducts(this.categorySelected);
    await this.getCategories();
  },
  methods: {
    ...mapActions('products', ['getProducts', 'getCategories', 'toggleCart']),
    async onChangeCategory(category) {
      this.$router.push({
        query: {
          category: category || undefined
        }
      });

      await this.getProducts(category);
    },
    onClickIcon() {
      this.toggleCart();
    }
  }
}
</script>
