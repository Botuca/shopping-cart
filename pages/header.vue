<template>
  <header
    class="h-16 bg-gray-700 border-b border-gray-400 z-10 text-white fixed w-full"
  >
    <div class="h-16 flex items-center justify-center items-center">
      <h1 class="font-bold text-xl">SHOPPING CART</h1>
      <div class="absolute right-5">
        <i
          class="fa-solid fa-cart-shopping relative text-2xl cursor-pointer"
          @click="onClickIcon"
        >
          <p
            v-if="!!productsCounter"
            class="bg-red-500 rounded-full absolute -bottom-1 -left-3 text-xs text-center px-1"
          >
            {{ productsCounter }}
          </p>
        </i>
      </div>
    </div>
    <div class="flex flex-row w-full bg-gray-500 items-center font-bold">
      <div
        class="w-24 text-center px-4 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-600 transition"
        @click="onClickCategory()"
      >
        HOME
      </div>
      <div class="flex flex-row items-center w-full">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="text-center px-4 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-600 transition"
          @click="onClickCategory(category)"
        >
          <a>
            {{ category }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'HeaderBase',
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
    computed: {
      ...mapGetters('products', ['productsCounter']),
    },
    methods: {
      onClickIcon() {
        this.$emit('on-click-icon');
      },
      onClickCategory(category) {
        this.$emit('on-click-category', category);
      },
    },
  };
</script>
