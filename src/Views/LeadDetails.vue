<template>
    <div class="lead-details-container">
      <Navbar></Navbar>
      <h2>Lead Details</h2>
  
      <div v-if="lead">
        <p><strong>Name:</strong> {{ lead.firstName }} {{ lead.lastName }}</p>
        <p><strong>Date:</strong> {{ lead.leadDate }}</p>
        <p><strong>Source:</strong> {{ lead.leadSource }}</p>
        <textarea name="text" id=""></textarea>
      </div>
      <p v-else>Loading lead details...</p>
      <Footer></Footer>
    </div>
    
  </template>
  
  <script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'LeadDetails',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        lead: null
      };
    },
    mounted() {
      const leadId = this.$route.params.id;
      fetch(`http://localhost:3000/leads/${leadId}`)
        .then(res => res.json())
        .then(data => {
          this.lead = data;
        })
        .catch(err => {
          console.error('Failed to fetch lead details:', err);
        });
    }
  };
  </script>
  
  <style scoped>
  .lead-details-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: 'Segoe UI', sans-serif;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  </style>
  