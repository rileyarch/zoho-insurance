<!-- src/views/HomeView.vue -->
<template>
    <div>
      <Navbar></Navbar>
      <h2>Dashboard</h2>
      <Footer></Footer>
      
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Footer,
      Navbar
  }};
  </script>
  