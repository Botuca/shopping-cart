<template>
  <section class="text-gray-600">
    <header class="flex fixed items-center justify-center h-16 bg-gray-100 w-full">
      <h1 class="font-bold text-xl">
        SHOPPING CART
      </h1>
    </header>
    <main>
      <div class="pt-16 flex flex-row justify-center items-start">
        <div class="mt-4 p-4 h-96 w-64 bg-gray-100 rounded">
          {{ categories }}
        </div>
        <section class="p-4 grid grid-cols-3 justify-items-center gap-1">
          <product-card
            v-for="product in products"
            :key="product.id"
            v-bind="{ product }"
          />
        </section>
      </div>
    </main>
    <footer class="flex h-28 bg-gray-100 text-xs w-full" >Criado por: Luiz Gustavo Eburneo</footer>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ProductCard } from '../components/index';

export default {
  name: "Teste",
  components: {
    ProductCard
  },
  computed: {
    ...mapState('products', ['products', 'categories'])
  },
  async mounted() {
    await this.getProducts();
    await this.getCategories();
  },
  methods: {
    ...mapActions('products', ['getProducts', 'getCategories']),
  }
}
</script>
