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
    <div class="footer-div">
    <Footer></Footer></div>
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

/* Container for the entire app */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}

/* Container for the dashboard grid layout */
.dashboard-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "notifications main"
    "quicklinks main";
  gap: 20px;
  flex-grow: 1;
  padding: 20px;
}

/* Style for the Notification box in the top left */
.Notification-Container {
  grid-area: notifications;
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow: auto;
}

/* Style for the Quicklinks box in the bottom left */
.Quicklinks {
  grid-area: quicklinks;
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow: auto;
}

/* Style for the Main Content box taking the entire right side */
.Main-Content {
  grid-area: main;
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow: auto;
}

/* Header styles */
.Notification-Container-Header h2,
.Quicklinks-header h2,
.Main-Content-header h1 {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.header-div {
height: 80px;
padding-bottom: 10px;
}
.footer-div{
  bottom: 0;
}
</style>