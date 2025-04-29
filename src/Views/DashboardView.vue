<!-- src/views/HomeView.vue -->
<template>
  <div class="app-container">
    <header class="header"><h1>Header</h1></header>
   
  
    <div class="dashboard-container">
      <nav class="navbar"><h1>Navbar</h1><ul class = nav-list>
        <router-link to="/" class="nav-link" active-class="active">Dashboard</router-link>
        <router-link to="/leads" class="nav-link" active-class="active">Leads</router-link>
        <router-link to="/marketingDollars" class="nav-link" active-class="active">Marketing Dollars</router-link>
        <router-link to="/profile" class="nav-link" active-class="active">Profile</router-link>
        <router-link to="/tickets" class="nav-link" active-class="active">Tickets</router-link>

      </ul>
    </nav> 
      <div class="notification-container">
        <header class="section-header"><h2>Notifications</h2></header>
        <!-- Notification content goes here -->
        <div class="section-content">
          <p>Your notification content will appear here</p>
        </div>
      </div>
      
      <div class="quicklinks">
        <header class="section-header"><h2>Quicklinks</h2></header>
        <!-- Quicklinks content goes here -->
        <div class="section-content">
          <p>Your quicklinks content will appear here</p>
        </div>
      </div>
      
      <div class="main-content">
        <header class="section-header"><h1>Main Content</h1></header>
        <!-- Main content goes here -->
        <div class="section-content">
          <p>Your main content will appear here</p>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  
};
</script>

<style>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      height: 100vh;
    }
    
    /* Main container */
    .app-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  gap: 0;
  background-color: #e9e9e9;
  box-sizing: border-box;
 
}
    
    /* Header */
    .header {
      grid-column: 1 / 5;
      grid-row: 1;
      margin-left: 1rem;
      margin-right: 1rem;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;;
      padding:20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    /* Navigation sidebar */
    .navbar {
      grid-column: 1;
      grid-row: 1 / 3;
      margin-top: 0;
      background-color: #333;
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    

    
    /* Dashboard container */
    .dashboard-container {
      grid-column: 1;
      
      
      display: grid;
      grid-template-columns: 250px 1fr 1fr 1fr;
      grid-template-rows: repeat(2,1fr);
      gap: 15px;
      padding: 15px;
      background-color: #e9e9e9;
    }
    
    /* Notification section */
    .notification-container {
      grid-column: 2;
      grid-row: 1;
      
    }
    
    /* Quicklinks section */
    .quicklinks {
      grid-column: 2;
      grid-row: 2;
      
    }
    
    /* Main content section */
    .main-content {
      grid-column: 3 / 5;
      grid-row: 1 / 3;
      
    }
    
    /* Section styling */
    .notification-container,
    .quicklinks,
    .main-content {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .section-header {
      padding: 1rem;
      background-color: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      font-weight: bold;
    }
    
    .section-content {
      padding: 1rem;
    }
/* Nav list and links styling */
.nav-list {
      list-style: none;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .nav-link {
      display: block;
      padding: 10px 15px;
      color: #f0f0f0;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
      font-weight: 500;
    }
    
    .nav-link:hover {
      background-color: #444;
      color: white;
    }
    
    .nav-link.active {
      background-color: #4285f4;
      color: white;
    }

</style>