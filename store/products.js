export const state = () => ({
  products: [],
  categories: [],
});

export const getters = {};

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get(
      'https://fakestoreapi.com/products'
    );

    commit('setProducts', products);
  },

  async getCategories({ commit }) {
    const categories = await this.$axios.$get(
      'https://fakestoreapi.com/products/categories'
    );

    commit('setCategories', categories);
  },
};
