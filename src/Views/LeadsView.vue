<template>
  <div class="app-container">
    <header class="header"><h1>Header</h1></header>
  
    <div class="dashboard-container">
      <nav class="navbar"><h1>Navbar</h1>
        <ul class="nav-list">
          <router-link to="/" class="nav-link" active-class="active">Dashboard</router-link>
          <router-link to="/leads" class="nav-link" active-class="active">Leads</router-link>
          <router-link to="/marketingDollars" class="nav-link" active-class="active">Marketing Dollars</router-link>
          <router-link to="/profile" class="nav-link" active-class="active">Profile</router-link>
          <router-link to="/tickets" class="nav-link" active-class="active">Tickets</router-link>
        </ul>
      </nav> 
      <div class="notification-container">
        <header class="section-header"><h2>Leads</h2></header>
        <div class="section-content">
          <table class="leads-table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Status</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="lead in leads" :key="lead.id" :class="{ 'new-lead': lead.status === 'New' }">
                <td>{{ lead.name }}</td>
                <td>{{ lead.email }}</td>
                <td>{{ lead.phone }}</td>
                <td>{{ lead.company }}</td>
                
                <td>
                  <span class="status-badge" :class="'status-' + lead.status.toLowerCase()">{{ lead.status }}</span>
                </td>
                <td><button @click="viewLeadDetails(lead)" class="action-button">View Lead</button></td>
              </tr>
              <tr v-if="leads.length === 0">
                <td colspan="5" class="no-results">No leads found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import leads data from services directory
import fakeLeads from '@/services/leads';

export default {
  name: 'LeadsView',
  data() {
    return {
      leads: []
    };
  },
  mounted() {
    this.getLeads();
  },
  methods: {
    getLeads() {
      this.leads = fakeLeads;
    },
    viewLeadDetails(lead) {
      this.$router.push({
        name: 'leadDetails',
        params: { id: lead.id}
      })
    }

  },
  watch: {
    // Using a function to watch the imported variable
    // This is more reliable than watching the imported variable directly
    '$forceUpdate': function() {
      this.getLeads();
    }
  }
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
  align-items: center;
  padding: 20px;
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
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background-color: #e9e9e9;
}

/* Notification section */
.notification-container {
  grid-column: 2 / 5;
  grid-row: 1 / 3;
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

/* Table styling */
.leads-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.leads-table th, 
.leads-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.leads-table thead tr {
  background-color: #f8f9fa;
  color: #333;
  font-weight: bold;
}

.leads-table tbody tr:hover {
  background-color: #f5f5f5;
}

.leads-table tbody tr.new-lead {
  background-color: #f0f7ff;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: 500;
}

.status-new {
  background-color: #e3f2fd;
  color: #1565c0;
}

.status-contacted {
  background-color: #fff8e1;
  color: #ffa000;
}

.status-qualified {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.status-proposal {
  background-color: #f3e5f5;
  color: #7b1fa2;
}

.status-closed {
  background-color: #eceff1;
  color: #546e7a;
}

.status-lost {
  background-color: #ffebee;
  color: #c62828;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: #757575;
}
.action-button{
border-radius: 8px;
background-color: blue;
border-color: #4285f4;
color: white;
padding: 5px;
}
</style>