// Define the state interface
interface AuthState {
    user: User | null;
  }
  
  // Define the User interface (you can adjust this based on your actual user structure)
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const state: AuthState = {
    user: null
  }
  
  const mutations = {
    setUser(state: AuthState, user: User) {
      state.user = user;
    }
  }
  
  const actions = {
    login({ commit }: { commit: Function }, user: User) {
      commit('setUser', user);
    },
    logout({ commit }: { commit: Function }) {
      commit('setUser', null);
    }
  }
  
  const getters = {
    isAuthenticated: (state: AuthState) => !!state.user,
    user: (state: AuthState) => state.user
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }