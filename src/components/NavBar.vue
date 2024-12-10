<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
          </li>
        </ul>

        <div class="text-end">
          <!-- Display "Login" and "Register" for unauthenticated users -->
          <div v-if="!isAuthenticated">
            <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
            <router-link to="/register" class="btn btn-warning">Sign-up</router-link>
          </div>

          <!-- Display "Logout" button for authenticated users -->
          <div v-else>
            <button @click="logout" class="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isAuthenticated", "getUser"]), // Add `getUser` if you need user details
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>


<style scoped>
/* Add your custom styles if needed */
</style>
