export const state = () => ({
  products: [],
  categories: [],
  productsInCart: [],
  showCart: false,
});

export const getters = {
  products({ products, productsInCart }) {
    return products.map((product) => ({
      ...product,
      isInCart: productsInCart.some(({ id }) => id === product.id),
    }));
  },
  calculateTotalPrice({ productsInCart }) {
    return productsInCart.reduce((acc, obj) => acc + obj.price, 0);
  },
};

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
  setProductInCart(state, product) {
    state.productsInCart.push(product);
  },
};

export const actions = {
  async getProducts({ commit }, category) {
    const products = await this.$axios.$get(
      category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products',
    );

    commit('setProducts', products);
  },

  async getCategories({ commit }) {
    const categories = await this.$axios.$get(
      'https://fakestoreapi.com/products/categories',
    );

    commit('setCategories', categories);
  },

  toggleCart({ commit, state }) {
    commit('genericMutation', {
      property: 'showCart',
      value: !state.showCart,
    });
  },

  addProductToCart({ commit }, product) {
    commit('setProductInCart', product);
  },

  clearCart({ commit }) {
    commit('genericMutation', {
      property: 'productsInCart',
      value: [],
    });
  },
};
