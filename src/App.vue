<template>
  <NavBar/>
  <main class="laman">
    <RouterView/>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.laman{
  margin-top:3rem ;
} 

.form-signin {
  max-width: 330px;
  padding: 1rem;
  margin: auto;
}
    
.form-signin .form-floating:focus-within {
  z-index: 2;
}
    
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
    
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>