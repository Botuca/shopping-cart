<template>
  <section>
    <div class="h-96 w-64 border border-gray-300 rounded bg-white">
      <img
        :src="product.image"
        class="object-contain h-48 w-48 m-auto pt-2 cursor-pointer"
        @click="$emit('onClickProduct', product)"
      />
      <div class="p-2">
        <span class="pt-4 text-ellipsis h-16 font-bold">
          {{ product.title }}
        </span>
        <div class="flex flex-col">
          <span class="pt-2 text-xs text-ellipsis">
            <b> Description: </b>
            {{ product.description }}
          </span>
          <span class="pt-1 text-xs">
            <b> Category: </b>
            {{ product.category }}
          </span>
          <span class="pt-1 text-xs">
            <b> Rating: </b>
            {{ product.rating.rate }} ({{ product.rating.count }})
          </span>
          <div class="pt-2 flex justify-between items-center">
            <span class="text-red-500 text-xl font-bold">
              ${{ product.price }}
            </span>
            <button
              class="addCart"
              :class="{ addCart__added: isProductInCart }"
              @click="onClickAdd(product)"
            >
              {{ productTextInCart }}
              <i class="fa-solid fa-cart-shopping text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    computed: {
      isProductInCart() {
        return this.product.isInCart;
      },
      productTextInCart() {
        return this.isProductInCart ? 'Added to' : 'Add to';
      },
    },
    methods: {
      onClickAdd(product) {
        this.$emit('click-add', product);
      },
    },
  };
</script>

<style scoped>
  .text-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .addCart {
    @apply text-xs bg-yellow-400 rounded px-2 py-1 font-bold hover:bg-yellow-500;
  }

  .addCart__added {
    @apply text-xs bg-green-400 rounded px-2 py-1 font-bold hover:bg-green-500;
  }
</style>
