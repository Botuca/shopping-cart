<template>
  <div
    v-if="showCart"
    class="fixed border border-gray-400 bg-white top-20 right-0 w-1/3 h-3/5 shadow-lg overflow-y-auto overflow-x-hidden p-4 rounded"
  >
    <div v-for="product in productsInCart" :key="product.id">
      <div class="cart__content border border-gray-400 rounded">
        <div class="px-2 my-2">
          <img
            :src="product.image"
            class="object-contain h-20 w-20"
            @click="$emit('onClickProduct', product)"
          />
        </div>
        <div
          class="px-2 my-2 border-l border-gray-200 flex flex-col justify-between"
        >
          <p class="text-ellipsis">{{ product.title }}</p>
          <div class="flex flex-row justify-between">
            <p class="pr-8">Qtd: 1</p>
            <p class="text-red-500 text-xl font-bold">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <button @click="clearCart">limpar</button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Cart',
    props: {
      showCart: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      ...mapState('products', ['productsInCart']),
    },
    methods: {
      ...mapActions('products', ['clearCart']),
    },
  };
</script>

<style scoped>
  .text-ellipsis {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .cart__content {
    display: grid;
    justify-content: center;
    grid-template-columns: 80px 3fr;
    margin-bottom: 16px;
  }
</style>
