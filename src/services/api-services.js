// src/services/api.service.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint.com/api',  // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 10000
});

export default {
  // Get all leads
  getLeads() {
    return apiClient.get('/leads');
  },
};