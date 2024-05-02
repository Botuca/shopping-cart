<template>
  <section class="h-screen">
    <main class="flex m-4">
      <div
        class="mx-auto bg-white border border-gray-300 rounded w-2/3 p-4 flex"
      >
        <img
          :src="product.image"
          class="object-contain h-80 w-80 pt-2 cursor-pointer"
          @click="$emit('on-click-product', product)"
        />
        <div class="pl-4 flex flex-col">
          <h2 class="font-bold text-xl">{{ product.title }}</h2>
          <span class="pt-1 text-xs">
            <b> Rating: </b>
            {{ rate }} ({{ count }})
          </span>
          <p class="text-red-500 text-3xl font-bold py-4">
            ${{ product.price }}
          </p>
          <p class="text-sm flex">{{ product.description }}</p>
          <button class="addCart">
            Add to
            <i class="fa-solid fa-cart-shopping text-xs" />
          </button>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Product',
    layout: 'base',
    data() {
      return {
        product: {},
      };
    },
    computed: {
      rate() {
        return this.product.rating?.rate;
      },
      count() {
        return this.product.rating?.count;
      },
      isProductInCart() {
        return this.product.isInCart;
      },
      productTextInCart() {
        return this.isProductInCart ? 'Added to' : 'Add to';
      },
    },
    async mounted() {
      const products1 = localStorage?.getItem?.('productsInCart') || [];
      console.log('local', products1);

      this.product = await this.getProduct(this.$route.params.id);
    },
    methods: {
      ...mapActions('products', ['getProduct']),
    },
  };
</script>

<style scoped>
  .addCart {
    @apply text-xs bg-yellow-400 rounded px-2 py-1 font-bold hover:bg-yellow-500;
  }

  .addCart__added {
    @apply text-xs bg-green-400 rounded px-2 py-1 font-bold hover:bg-green-500;
  }
</style>
