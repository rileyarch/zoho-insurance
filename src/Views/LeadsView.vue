<template>
  <div class="leads-container">
    <Navbar></Navbar>
    <h2>Leads</h2>
     <!-- Filter section moved above the table -->
   <div class="filters">
      <label for="filter-dropdown">Status:  </label>
      <select 
        id="filter-dropdown" 
        class="filter-select" 
        v-model="selectedFilter"
        
      >
        <option value="All">All Status</option>
        <option value="Not Contacted">Not Contacted</option>
        <option value="Closed Won">Closed Won</option>
        <option value="In Progress">In Progress</option>
      </select>
      <label for="filter-dropdown2">Source:  </label>
      <select 
        id="filter-dropdown2" 
        class="filter-select2" 
        v-model="selectedSource"
        
      >
        <option value="All">All Sources</option>
        <option value="Facebook">Facebook</option>
        <option value="Google Ads">Google Ads</option>
        <option value="Instagram">Instagram</option>
      </select>
    </div>
   

    <!-- Check if there are any filtered leads, otherwise show the loading message -->
    <table v-if="filteredLeads.length" class="lead-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Capture Date</th>
          <th>Source</th>
          <th>Lead Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in filteredLeads" :key="lead.id">
          <td>{{ lead.firstName }} {{ lead.lastName }}</td>
          <td>{{ lead.leadDate }}</td>
          <td>{{ lead.leadSource }}</td>
          <td>{{ lead.leadStatus }}</td>
          <td>
            <router-link :to="{ name: 'leadDetails', params: { id: lead.id } }">
              <button class="view-button">View Details</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Show loading text if no leads are available yet -->
    <p v-else-if="isLoading" class="loading">Loading leads...</p>
    
    <!-- Show message when no leads match the filter -->
    <p v-else class="no-results">No leads match the selected filter.</p>
    <Footer></Footer>
  </div>
  
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'LeadsView',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      leads: [],
      selectedFilter: 'All',
      selectedSource: 'All',
      isLoading: true
    };
  },
  computed: {
    filteredLeads() {
      if (this.selectedFilter === 'All' && this.selectedSource==='All') {
        return this.leads;
      }
      
      return this.leads.filter(lead => {
    // Handle each filter independently
    const statusMatch = this.selectedFilter === 'All' || lead.leadStatus === this.selectedFilter;
    const sourceMatch = this.selectedSource === 'All' || lead.leadSource === this.selectedSource;
    
    // Only return leads that match both conditions
    return statusMatch && sourceMatch;
      });
    }
  },
  methods: {
    
    fetchLeads() {
      this.isLoading = true;
      fetch('http://localhost:3000/leads')
        .then(res => res.json())
        .then(data => {
          this.leads = data;
          this.isLoading = false;
        })
        .catch(err => {
          console.error('Failed to fetch leads:', err);
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.fetchLeads();
  }
};
</script>

<style scoped>
/* Container for the leads view */
.leads-container {

  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
}

/* Table styling */
.lead-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  text-align: left;
}

.lead-table th,
.lead-table td {
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;
}

.lead-table th {
  background-color: #f1f1f1;
  color: #333;
  font-weight: bold;
}

.lead-table tr:hover {
  background-color: #f1f1f1;
}

/* Styling for the view button */
.view-button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view-button:hover {
  background-color: #0056b3;
}

/* Loading text styling */
.loading, .no-results {
  text-align: center;
  color: #777;
  font-style: italic;
  margin-top: 2rem;
}

.filters {
  margin: 20px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  position: relative;
}

.filter-select, .filter-select2 {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  min-width: 150px;
  margin: 20px;
}

.filter-select:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}
</style>