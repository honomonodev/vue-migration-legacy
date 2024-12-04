interface AuthState {
  user: User | null;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const state: AuthState = {
  user: null,
};

const mutations = {
  setUser(state: AuthState, user: User) {
    state.user = user;
  },
  clearUser(state: AuthState) {
    state.user = null;
  },
};

const actions = {
  login({ commit }: { commit: Function }, user: User) {
    commit('setUser', user);
  },
  logout({ commit }: { commit: Function }) {
    commit('clearUser');
  },
};

const getters = {
  isAuthenticated: (state: AuthState) => !!state.user,
  user: (state: AuthState) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};