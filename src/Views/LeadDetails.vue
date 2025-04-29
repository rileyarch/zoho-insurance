<template>
    <div class="lead-details-container">

      
        <Header></Header> 
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


  export default {
    name: 'LeadDetails',
    
    data() {
      return {
        lead: null
      };
    }
  };
  </script>
  
  <style>
  
  </style>
  