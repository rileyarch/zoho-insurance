<!-- src/views/HomeView.vue -->
<template>
    <div>
      
        <Header></Header> 
      <Navbar></Navbar>
      <h2>Tickets</h2>
      <Footer></Footer>
      
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Header.vue';
  export default {
    name: 'TicketsView',
    components: {
      Footer,
      Navbar,Header
  }};
  </script>
  