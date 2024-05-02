<template>
  <div
    v-if="showCart"
    ref="cartModal"
    class="fixed border border-gray-400 bg-white top-14 right-4 w-1/3 max-h-96 shadow-lg overflow-y-auto overflow-x-hidden rounded text-gray-600 z-10"
  >
    <div
      class="p-4 border-b border-gray-400 text-lg font-bold bg-gray-700 text-white flex justify-between items-center"
    >
      <span>SHOPPING CART</span>
      <i
        class="fa-solid fa-circle-xmark cursor-pointer"
        @click="$emit('close')"
      />
    </div>
    <div v-if="productsInCart.length" class="m-4 flex flex-col">
      <div v-for="product in productsInCart" :key="product.id">
        <div class="cart__content border border-gray-400 rounded">
          <div class="px-2 my-2">
            <img
              :src="product.image"
              class="object-contain h-20 w-20"
              @click="$emit('on-click-product', product)"
            />
          </div>
          <div
            class="px-2 my-2 border-l border-gray-300 flex flex-col justify-between"
          >
            <p class="text-ellipsis">{{ product.title }}</p>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row items-center">
                <p>Qtd: 1</p>
                <i class="fa-solid fa-grip-lines-vertical px-2 text-gray-300" />
                <button
                  class="text-xs text-blue-900 hover:underline"
                  @click="$emit('on-delete-product', product)"
                >
                  Excluir
                </button>
              </div>
              <p class="text-red-500 text-xl font-bold">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center m-8 text-xs">
      Nenhum produto adicionado no carrinho
    </div>
    <footer
      v-if="productsInCart.length"
      class="border-t border-gray-400 py-2 pl-4 pr-6 flex justify-end text-sm"
    >
      <span class="text-xl">
        Total:
        <span class="text-red-500 font-bold"> ${{ calculateTotalPrice }} </span>
      </span>
    </footer>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';

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
      ...mapGetters('products', ['calculateTotalPrice']),
    },
    watch: {
      productsInCart: {
        handler() {
          if (this.showCart) {
            this.$nextTick(() => {
              const content = this.$refs.cartModal;
              content.scrollTop = content.scrollHeight;
            });
          }
        },
      },
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
