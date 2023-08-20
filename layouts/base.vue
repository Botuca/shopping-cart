<template>
  <section>
    <header-base
      v-bind="{ categories }"
      @on-click-icon="toggleCart"
      @on-click-category="onClickCategory"
    />
    <Nuxt />
    <footer-base />
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import HeaderBase from '../pages/header.vue';
  import FooterBase from '../pages/footer.vue';

  export default {
    name: 'LayoutBase',
    components: {
      HeaderBase,
      FooterBase,
    },
    computed: {
      ...mapState('products', ['categories', 'showCart']),
    },
    async mounted() {
      await this.getCategories();
    },
    methods: {
      ...mapActions('products', ['getCategories', 'toggleCart', 'getProducts']),
      async onClickCategory(category) {
        this.$router.push({
          query: {
            category: category || undefined,
          },
        });

        await this.getProducts(category);
      },
    },
  };
</script>
