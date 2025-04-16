<!-- src/views/HomeView.vue -->
<template>
    <div>
      
      
      <Navbar></Navbar>
      <h2>About</h2>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'AboutView',
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  