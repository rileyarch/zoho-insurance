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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* Lead Detail Styling */
.lead-detail-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.lead-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.lead-header h3 {
  font-size: 1.5rem;
  color: #333;
}

.lead-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}

.back-btn {
  padding: 6px 12px;
  background-color: #f1f3f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #e3e3e3;
}

.loading-or-error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #666;
}

/* Status Badges */
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
</style><template>
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
        <header class="section-header">
          <div class="back-button-container">
            <button @click="goBack" class="back-btn">← Back to Leads</button>
          </div>
          <h2>Lead Details</h2>
        </header>
        <div class="section-content" v-if="lead">
          <div class="lead-detail-card">
            <div class="lead-header">
              <h3>{{ lead.name }}</h3>
              <span class="status-badge" :class="'status-' + lead.status.toLowerCase()">{{ lead.status }}</span>
            </div>
            
            <div class="lead-info-grid">
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">{{ lead.email }}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">{{ lead.phone }}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">{{ lead.company }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-content" v-else>
          <div class="loading-or-error">Lead information not found. Please go back and try again.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the same leads data source
import fakeLeads from '@/services/leads';

export default {
  name: 'LeadDetail',
  props: {
    id: {
      type: [String,Number],
      required: true
    }
  },
  data() {
    return {
      lead: null
    };
  },
  mounted() {
    this.loadLeadDetails();
  },
  methods: {
    loadLeadDetails() {
      // Get the lead data using the index from route params
      const leadId = this.$route.params.id;
        this.lead = fakeLeads.find(lead => lead.id ===leadId);
      }
    },
    goBack() {
      this.$router.push('/leads');
    }
  }
;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* Lead Detail Styling */
.lead-detail-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.lead-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.lead-header h3 {
  font-size: 1.5rem;
  color: #333;
}

.lead-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}

.lead-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.email-btn {
  background-color: #e3f2fd;
  color: #1565c0;
}

.email-btn:hover {
  background-color: #bbdefb;
}

.call-btn {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.call-btn:hover {
  background-color: #c8e6c9;
}

.edit-btn {
  background-color: #f3e5f5;
  color: #7b1fa2;
}

.edit-btn:hover {
  background-color: #e1bee7;
}

.lead-notes-section {
  margin-bottom: 30px;
}

.lead-notes-section h4, 
.activity-timeline h4 {
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #333;
}

.notes-container {
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  min-height: 60px;
}

.no-notes {
  color: #999;
  font-style: italic;
}

.add-note {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.note-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
}

.add-note-btn {
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-note-btn:hover {
  background-color: #3367d6;
}

.timeline {
  margin-top: 15px;
}

.timeline-item {
  display: flex;
  margin-bottom: 15px;
  position: relative;
}

.timeline-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px;
  flex-shrink: 0;
}

.timeline-icon.email {
  background-color: #e3f2fd;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231565c0'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E");
}

.timeline-icon.call {
  background-color: #e8f5e9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232e7d32'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E");
}

.timeline-icon.note {
  background-color: #fff8e1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffa000'%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/%3E%3C/svg%3E");
}

.timeline-content {
  flex-grow: 1;
}

.activity-date {
  font-size: 0.8rem;
  color: #666;
  display: block;
  margin-bottom: 5px;
}

.activity-text {
  font-size: 0.95rem;
  color: #333;
}

.no-activity {
  color: #999;
  font-style: italic;
  margin-top: 10px;
}

.back-btn {
  padding: 6px 12px;
  background-color: #f1f3f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #e3e3e3;
}

.loading-or-error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #666;
}

/* Status Badges */
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
</style>