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
    <footer class="flex flex-col h-28 bg-gray-300 text-xs w-full border-t border-gray-400 p-2">
      <span>Criado por: <b>Luiz Gustavo Eburneo</b></span>
      <div class="text-2xl pt-2">
        <a href="https://github.com/Botuca" target="_blank" class="pr-2">
          <i class="fa-brands fa-github"/>
        </a>
        <a href="https://www.linkedin.com/in/luizeburneo" target="_blank" class="pr-2">
          <i class="fa-brands fa-linkedin"/>
        </a>
        <a href="https://www.instagram.com/gustavo_eburneo" target="_blank">
          <i class="fa-brands fa-square-instagram"/>
        </a>
      </div>
    </footer>
    <div v-if="showCart" class="fixed border border-gray-400 bg-white top-16 right-0 m-2 w-1/4 h-3/5 shadow-lg">
      ALO
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductCard from '../components/product-card.vue';
import CategoriesRadio from '../components/categories-radio.vue';
import HeaderBase from '../components/header.vue';

export default {
  name: "HomePage",
  components: {
    ProductCard,
    CategoriesRadio,
    HeaderBase,
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
