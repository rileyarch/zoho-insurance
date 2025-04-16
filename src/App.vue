<template>
  <div id="app">
    <login-form v-if="!isLoggedIn" @login-success="handleLoginSuccess"/>  

    <!-- Render the current route's component here -->
    <router-view v-else></router-view> <!-- This is where the route components will appear -->

    
  </div>
</template>

<script>
import LoginForm from './Views/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm
  },
  data(){
    return{
      isLoggedIn: false
    }
  },

  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true;
}}}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 40px; /* Ensure content doesn't hide behind the footer */
}
</style>
