<template>
  <section>
    <div
      class="h-96 w-64 border border-gray-300"
    >
      <img :src="product.image" class="object-contain h-48 w-48 m-auto pt-2 cursor-pointer" @click="$emit('onClickProduct', product)" />
      <div class="p-2">
        <span class="pt-4 text-ellipsis h-16 font-bold">{{ product.title }}</span>
        <div class="flex flex-col">
          <span class="pt-2 text-xs text-ellipsis"><b>Description: </b>{{ product.description }}</span>
          <span class="pt-1 text-xs"><b>Category: </b>{{ product.category }}</span>
          <span class="pt-1 text-xs"><b>Rating: </b>{{ product.rating.rate }} ({{ product.rating.count }})</span>
          <span class="text-red-500 text-xl font-bold pt-2">${{ product.price }}</span>
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
      }
    }
  }
</script>

<style scoped>
.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
