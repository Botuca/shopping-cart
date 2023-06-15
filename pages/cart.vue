<template>
  <div
    v-if="showCart"
    class="fixed border border-gray-400 bg-white top-16 right-0 m-2 w-1/4 h-3/5 shadow-lg"
  >
    ALO
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    props: {
      showCart: {
        type: Boolean,
        required: true,
      },
    },
  }
</script>
