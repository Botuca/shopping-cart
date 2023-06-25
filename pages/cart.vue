<template>
  <div
    v-if="showCart"
    class="fixed border border-gray-400 bg-white top-16 right-0 m-2 w-1/4 h-3/5 shadow-lg"
  >
    {{ productsInCart }}
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
