export const state = () => ({
  products: [],
  categories: [],
  showCart: false,
});

export const getters = {};

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },

  genericMutation(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  async getProducts({ commit }, category) {
    const products = await this.$axios.$get(
      category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products'
    );

    commit('setProducts', products);
  },

  async getCategories({ commit }) {
    const categories = await this.$axios.$get(
      'https://fakestoreapi.com/products/categories'
    );

    commit('setCategories', categories);
  },

  toggleCart({ commit, state }) {
    commit('genericMutation', {
      property: 'showCart',
      value: !state.showCart,
    });
  },
};
