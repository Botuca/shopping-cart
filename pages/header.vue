<template>
  <header
    class="flex fixed items-center justify-center h-16 bg-gray-300 w-full border-b border-gray-400"
  >
    <h1 class="font-bold text-xl">SHOPPING CART</h1>
    <i
      class="fa-solid fa-cart-shopping absolute right-5 text-2xl cursor-pointer"
      @click="onClickIcon"
    />
  </header>
</template>

<script>
  export default {
    name: 'HeaderBase',
    methods: {
      onClickIcon() {
        this.$emit('clickIcon')
      },
    },
  }
</script>
