<template>
    <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
        <input v-model="data.username" type="username" class="form-control" id="floatingInput">
        <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating">
        <input v-model="data.password" type="password" class="form-control" id="floatingPassword">
        <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Remember me
        </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
    </main>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        name: 'LoginPage',
        setup() {
            const data = reactive({
                username: '',
                password: ''
            });
            
            const router = useRouter();

            const submit = async () => {
                await fetch('http://192.168.0.42:4001/users/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                    body: JSON.stringify(data)
                });

                await router.push('/');

            }

            return {
                data,
                submit
            }
        }
    }

</script>

<style scoped>

</style>