<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please Log In</h1>

      <div class="form-floating">
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          placeholder="Email address"
        />
        <label for="floatingInput">Email address</label>
        <div v-if="errors.email" class="text-danger">
          {{ errors.email }}
        </div>
      </div>

      <div class="form-floating">
        <input
          v-model="data.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
        <div v-if="errors.password" class="text-danger">
          {{ errors.password }}
        </div>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit" :disabled="isLoading">
        Log In
      </button>
    </form>
  </main>
</template>

<script>
import { reactive, ref } from "vue";
import { api } from "@/services/ApiCalls"; // Adjust path if necessary
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  name: "LoginPage",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });

    const errors = reactive({
      email: "",
      password: "",
    });

    const isLoading = ref(false);
    const router = useRouter();
    const toast = useToast();

    // Basic form validation
    const validate = () => {
      let isValid = true;

      // Clear previous errors
      errors.email = "";
      errors.password = "";

      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!data.email) {
        errors.email = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(data.email)) {
        errors.email = "Invalid email format.";
        isValid = false;
      }

      // Validate password
      if (!data.password) {
        errors.password = "Password is required.";
        isValid = false;
      } else if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
        isValid = false;
      }

      return isValid;
    };

    const submit = async () => {
      if (!validate()) {
        toast.error("Please fix the form errors.");
        return;
      }

      isLoading.value = true;
      try {
        const result = await api.post("/users/login", data); // Adjust the endpoint as needed
        console.log("Login successful:", result);
        toast.success("Login successful!");

        // Redirect to dashboard or home page
        router.push("/"); // Adjust the redirect as needed
      } catch (err) {
        console.error("Error:", err.message);
        toast.error(`Login Failed: ${err.message}`);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      data,
      errors,
      isLoading,
      submit,
    };
  },
};
</script>

<style scoped>
.text-danger {
  font-size: 0.8rem;
}
</style>
