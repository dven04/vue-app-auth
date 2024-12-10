import { createStore } from 'vuex';
import { api } from '@/services/ApiCalls'; // Adjust path as needed

export default createStore({
  state: {
    user: null, // Store logged-in user information
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user; // Check if the user is logged in
    },
    getUser(state) {
      return state.user; // Return user details
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Set user data
    },
    clearUser(state) {
      state.user = null; // Clear user data on logout
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const user = await api.get("/users/fetch"); // Adjust endpoint as needed
        commit("setUser", user);
      } catch (err) {
        console.error("Error fetching user:", err.message);
        commit("clearUser");
      }
    },
    async logout({ commit }) {
      try {
        await api.post("/users/logout"); // Add API endpoint for logging out, if applicable
      } catch (err) {
        console.error("Error during logout:", err.message);
      } finally {
        commit("clearUser");
      }
    },
  },
  
});
