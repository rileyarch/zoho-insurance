// src/services/api-services.js
import axios from 'axios';

// Get environment variables from .env using Vue's approach
const ZOHO_CLIENT_ID = process.env.CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.API_REFRESH;
const ZOHO_API_TOKEN = process.env.API_TOKEN;

// Store token in memory to avoid repeatedly fetching it
let cachedToken = ZOHO_API_TOKEN || null;
let tokenExpiryTime = null;


const getAccessToken = async () => {
  try {
    console.log('Refreshing Zoho access token...');
    
    const tokenResponse = await axios.post(
      'https://accounts.zoho.com/oauth/v2/token',
      null,
      {
        params: {
          refresh_token: ZOHO_REFRESH_TOKEN,
          client_id: ZOHO_CLIENT_ID,
          client_secret: ZOHO_CLIENT_SECRET,
          grant_type: 'refresh_token'
        }
      }
    );
    
    // Store the new token and set its expiry time (typically 1 hour)
    cachedToken = tokenResponse.data.access_token;
    tokenExpiryTime = Date.now() + (tokenResponse.data.expires_in * 1000);
    
    console.log('Token refreshed successfully');
    return cachedToken;
  } catch (error) {
    console.error('Error refreshing token:', error.response?.data || error.message);
    throw new Error('Failed to refresh OAuth token');
  }
};

/**
 * Get a valid access token, refreshing if necessary
 * @returns {Promise<string>} A valid access token
 */
const getValidToken = async () => {
  // If we have a valid token that's not expired, use it
  if (cachedToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
    return cachedToken;
  }
  
  // Otherwise, get a new token
  return await getAccessToken();
};


export const fetchZohoLeads = async (currentUserEmail) => {
  // Validate input
  if (!currentUserEmail) {
    console.error('Error: No user email provided to fetchZohoLeads');
    return [];
  }
  
  try {
    console.log(`Fetching leads for user: ${currentUserEmail}`);
    
    // Get a valid token
    const token = await getValidToken();
    
    // Make the API request
    const leadsResponse = await axios.get('/api/zoho/crm/v7/Leads/search', {
      params: {
        criteria: `Agent_Email:equals:${currentUserEmail}`
      },
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`
      }
    });
    
    // Check if we got valid data and map it to our format
    if (leadsResponse.data && leadsResponse.data.data) {
      console.log(`Found ${leadsResponse.data.data.length} leads`);
      
      return leadsResponse.data.data.map(item => ({
        id: item.id,
        firstName: item.First_Name || '',
        lastName: item.Last_Name || '',
        leadSource: item.Lead_Source || 'Unknown',
        leadStatus: item.Lead_Status || 'Not Contacted'
      }));
    } else {
      console.warn('Unexpected response format from Zoho API:', leadsResponse.data);
      return [];
    }
  } catch (error) {
    // Handle various error cases
    console.error('Error fetching leads from Zoho CRM:', error.response?.data || error.message);
    
    // If token is expired (401), attempt to refresh it once and retry
    if (error.response && error.response.status === 401) {
      try {
        console.log('Token expired. Refreshing token and retrying...');
        
        // Force token refresh by invalidating the cache
        cachedToken = null;
        tokenExpiryTime = null;
        
        // Get new token and retry
        const newToken = await getValidToken();
        
        const retryResponse = await axios.get('/api/zoho/crm/v7/Leads/search', {
          params: {
            criteria: `Agent_Email:equals:${currentUserEmail}`
          },
          headers: {
            Authorization: `Zoho-oauthtoken ${newToken}`
          }
        });
        
        if (retryResponse.data && retryResponse.data.data) {
          console.log(`Retry successful. Found ${retryResponse.data.data.length} leads`);
          
          return retryResponse.data.data.map(item => ({
            id: item.id,
            firstName: item.First_Name || '',
            lastName: item.Last_Name || '',
            leadSource: item.Lead_Source || 'Unknown',
            leadStatus: item.Lead_Status || 'Not Contacted'
          }));
        } else {
          console.warn('Unexpected response format from Zoho API after retry:', retryResponse.data);
          return [];
        }
      } catch (retryError) {
        console.error('Error fetching leads after token refresh:', retryError.response?.data || retryError.message);
        return [];  // Return empty array instead of throwing
      }
    }
    
    // For all other errors, return empty array
    return [];
  }
};

// Export additional API methods as needed
export const fetchLeadDetails = async (leadId) => {
  if (!leadId) {
    console.error('Error: No lead ID provided to fetchLeadDetails');
    return null;
  }
  
  try {
    const token = await getValidToken();
    
    const response = await axios.get(`/api/zoho/crm/v7/Leads/${leadId}`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`
      }
    });
    
    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0];
    } else {
      console.warn('Lead not found or unexpected response format');
      return null;
    }
  } catch (error) {
    console.error('Error fetching lead details:', error.response?.data || error.message);
    return null;
  }
};