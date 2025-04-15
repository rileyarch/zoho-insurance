<template>
  <div class="leads-container">
    <h2>Leads</h2>

    <!-- Check if there are any leads, otherwise show the loading message -->
    <table v-if="leads.length" class="lead-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Source</th>
          <th>Actions</th> <!-- New Actions column -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in leads" :key="lead.id">
          <td>{{ lead.firstName }} {{ lead.lastName }}</td>
          <td>{{ lead.leadDate }}</td>
          <td>{{ lead.leadSource }}</td>
          <td>
            <!-- Add button to go to LeadDetails view -->
            <router-link :to="{ name: 'leadDetails', params: { id: lead.id } }">
              <button class="view-button">View Details</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Show loading text if no leads are available yet -->
    <p v-else class="loading">Loading leads...</p>
  </div>
</template>

<script>
export default {
  name: 'LeadsView',
  data() {
    return {
      leads: []
    };
  },
  mounted() {
    fetch('http://localhost:3000/leads')
      .then(res => res.json())
      .then(data => {
        this.leads = data;
      })
      .catch(err => {
        console.error('Failed to fetch leads:', err);
      });
  }
};
</script>

<style scoped>
/* Container for the leads view */
.leads-container {
  max-width: 900px;
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
  background-color: #f9f9f9;
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
.loading {
  text-align: center;
  color: #777;
  font-style: italic;
}
</style>
