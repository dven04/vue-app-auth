<template>
  <main class="container">
    <h1>Welcome, {{ getUser?.name || "User" }}!</h1>
    <p>Email: {{ getUser?.email || "N/A" }}</p>
  </main>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["getUser"]), // Get user details from Vuex
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  async mounted() {
    await this.fetchUser(); // Ensure user data is fetched
  },
};
</script>


<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}
</style>
