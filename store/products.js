export const state = () => ({
  products: [],
});

export const getters = {};

export const mutations = {
  setProducts(products) {
    state.products = products;
  },
};

export const actions = {
  async getProducts({ commit }) {
    await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(({ products }) => commit('setProducts', products));
  },
};
