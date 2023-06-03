<template>
  <section class="text-gray-600">
    <header class="flex fixed items-center justify-center h-16 bg-gray-300 w-full border-b border-gray-400">
      <h1 class="font-bold text-xl">
        SHOPPING CART
      </h1>
      <i class="fa-solid fa-cart-shopping absolute right-5 text-2xl"></i>
    </header>
    <main>
      <div class="pt-16 flex flex-row justify-center items-start">
        <categories-radio v-bind="{ categories, categorySelected }" @onChangeCategory="onChangeCategory" />
        <section class="p-4 grid grid-cols-3 justify-items-center gap-4">
          <product-card
            v-for="product in products"
            v-bind="{ product }"
            :key="product.id"
            @onClickProduct="onClickProduct"
          />
        </section>
      </div>
    </main>
    <footer class="flex h-28 bg-gray-300 text-xs w-full border-t border-gray-400">Criado por: Luiz Gustavo Eburneo</footer>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductCard from '../components/product-card.vue';
import CategoriesRadio from '../components/categories-radio.vue';

export default {
  name: "HomePage",
  components: {
    ProductCard,
    CategoriesRadio
  },

  computed: {
    ...mapState('products', ['products', 'categories']),
    categorySelected() {
      return this.$route?.query?.category || '';
    }
  },
  async mounted() {
    await this.getProducts(this.categorySelected);
    await this.getCategories();
  },
  methods: {
    ...mapActions('products', ['getProducts', 'getCategories']),
    async onChangeCategory(category) {
      this.$router.push({
        query: {
          category: category || undefined
        }
      });

      await this.getProducts(category);
    },
    onClickProduct(product) {}
  }
}
</script>
