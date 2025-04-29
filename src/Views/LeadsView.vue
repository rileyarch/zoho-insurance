<template>
  <div class="leads-container">
    
      <Header></Header> 
    <Navbar></Navbar>
    <div class="leads-page">
    <h2>Leads</h2>
    <div class="all-leads-containt">
      <table class="leads-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Source</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example rows -->
            <tr>
              <td>John Smith</td>
              <td>Website Form</td>
              <td><span class="status status-new">New</span></td>
              <td>Apr 15, 2025</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>Sarah Johnson</td>
              <td>Referral</td>
              <td><span class="status status-contacted">Contacted</span></td>
              <td>Apr 12, 2025</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>Michael Brown</td>
              <td>Social Media</td>
              <td><span class="status status-qualified">Qualified</span></td>
              <td>Apr 10, 2025</td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    
    
   
   

    </div>
    <Footer></Footer>
  </div>
  
</template>

<script>



export default {
  name: 'LeadsView',
 
};
</script>


  <style>
    /* Overall page styling */
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f7fa;
      color: #333;
    }
    
    .leads-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .leads-page {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #2c3e50;
    }
    
    /* Table styling */
    .all-leads-content {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .leads-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    
    .leads-table th {
      background-color: #f8f9fa;
      padding: 1rem;
      font-weight: 600;
      color: #606060;
      border-bottom: 2px solid #e0e0e0;
    }
    
    .leads-table td {
      padding: 1rem;
      border-bottom: 1px solid #eaeaea;
    }
    
    .leads-table tr:last-child td {
      border-bottom: none;
    }
    
    .leads-table tr:hover {
      background-color: #f5f5f5;
    }
    
    /* Status styling */
    .status {
      padding: 0.4rem 0.8rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 500;
      display: inline-block;
    }
    
    .status-new {
      background-color: #e3f2fd;
      color: #1976d2;
    }
    
    .status-contacted {
      background-color: #fff8e1;
      color: #ff8f00;
    }
    
    .status-qualified {
      background-color: #e8f5e9;
      color: #388e3c;
    }
  </style>




