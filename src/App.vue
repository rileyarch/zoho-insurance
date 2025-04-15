<template>
  <div id="app">
    <!-- Render Navbar -->
    <NavbarTemplate />

    <!-- Render the current route's component here -->
    <router-view></router-view> <!-- This is where the route components will appear -->

    <!-- Render Footer -->
    <FooterTemplate />
  </div>
</template>

<script>
import NavbarTemplate from './components/Navbar.vue';
import FooterTemplate from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarTemplate,
    FooterTemplate,
  },
};
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
