<template>
  <header
    class="h-16 bg-gray-700 border-b border-gray-400 z-10 text-white fixed w-full"
  >
    <div class="h-16 flex items-center justify-center items-center">
      <h1 class="font-bold text-xl">SHOPPING CART</h1>
      <i
        class="fa-solid fa-cart-shopping absolute right-5 text-2xl cursor-pointer"
        @click="onClickIcon"
      />
    </div>
    <div class="flex flex-row w-full bg-gray-500 items-center font-bold">
      <div
        class="w-24 text-center px-4 py-1 hover:border-white transition border border-transparent cursor-pointer"
        @click="onClickCategory()"
      >
        HOME
      </div>
      <div class="flex flex-row items-center w-full">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="text-center px-4 py-1 hover:border-white transition border border-transparent cursor-pointer"
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
  export default {
    name: 'HeaderBase',
    props: {
      categories: {
        type: Array,
        required: true,
      },
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
