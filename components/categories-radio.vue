<template>
  <div class="mt-4 p-4 h-46 w-64 bg-gray-200 border border-gray-400">
    <input v-model="localCategory" type="radio" :value="''" @change="$emit('onChangeCategory', localCategory)">
    <label>ALL</label>
    <div v-for="(category, index) in categories" :key="index">
      <input 
        v-model="localCategory"
        type="radio"
        name="categories"
        :value="category"
        @change="$emit('onChangeCategory', category)"
      >
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
      default: ''
    }
  },
  data() {
    return {
      localCategory: this.categorySelected
    };
  }
}
</script>
