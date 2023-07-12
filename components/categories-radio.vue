<template>
  <div class="categories-radio">
    <input
      v-model="localCategory"
      type="radio"
      :value="''"
      @change="$emit('onChangeCategory', localCategory)"
    />
    <label>ALL PRODUCTS</label>
    <div v-for="(category, index) in categories" :key="index">
      <input
        v-model="localCategory"
        type="radio"
        name="categories"
        :value="category"
        @change="$emit('onChangeCategory', category)"
      />
      <label for="categories">{{ category.toUpperCase() }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoriesRadio',
    props: {
      categories: {
        type: Array,
        required: true,
      },
      categorySelected: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        localCategory: this.categorySelected,
      };
    },
  };
</script>

<style scoped>
  .categories-radio {
    height: fit-content;
    @apply p-4 w-64 bg-white border border-gray-400 rounded font-bold;
  }
</style>
