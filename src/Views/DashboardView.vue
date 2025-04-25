<!-- src/views/HomeView.vue -->
<template>
  <div class="app-container">
   
    <Header></Header> 
  
  
    <Navbar></Navbar>
  
    <div class="dashboard-container">
      <div class="Notification-Container">
        <header class="Notification-Container-Header"><h2>Notifications</h2></header>
        <!-- Notification content goes here -->
      </div>
      <div class="Quicklinks">
        <header class="Quicklinks-header"><h2>Quicklinks</h2></header>
        <!-- Quicklinks content goes here -->
      </div>
      <div class="Main-Content">
        <header class="Main-Content-header"><h1>Main Content</h1></header>
        <!-- Main content goes here -->
      </div>
    </div>
    
    <Footer class="footer-bar"></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Footer,
    Navbar,
    Header
  }
};
</script>

<style>
/* Reset some default styles */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}
.dashboard-container {
  padding-top: 120px;
  padding-left: 200px;
  padding-bottom: 20px;
}
.footer-bar {
  bottom: 0;
}
</style>