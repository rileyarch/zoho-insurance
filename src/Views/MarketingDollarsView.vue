<!-- src/views/HomeView.vue -->
<template>
    <div>
      <Navbar></Navbar>
      <h2>Marketing Dollars</h2>
      <Footer></Footer>
      
    </div>
  </template>
  
  <script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

  export default {
    name: 'MarketingDollarsView',
    components: {
      Navbar,
      Footer
  }};
  </script>
  