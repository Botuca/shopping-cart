<template>
  <section class="text-gray-600">
    <header class="fixed flex items-center justify-center h-16 bg-gray-100 w-full">
      <h1>
        Shooping Cart do BOTUCA
      </h1>
    </header>
    <main class="pt-16">
      <footer class="flex h-16 bg-gray-100" >Criado por: Luiz Gustavo Eburneo</footer>
    </main>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Teste",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    console.log(this.$store.state);
    this.products = await this.getProducts();
  },
  methods: {
    ...mapActions({ getProducts: 'products/getProducts' }),
  }
}
</script>
