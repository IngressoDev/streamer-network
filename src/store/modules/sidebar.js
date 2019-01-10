// initial state
const state = {
  visible: true,
};

// getters
const getters = {
  visible: () => state.visible,
};

// actions
const actions = {
  toggleSidebar: ({ commit }) => {
    commit('TOGGLE_SIDEBAR');
  },
};

// mutations
const mutations = {
  TOGGLE_SIDEBAR: () => {
    state.visible = !state.visible;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
