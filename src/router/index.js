// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '../Views/DashboardView.vue';
import MarketingDollarsView from '../Views/MarketingDollarsView.vue';
import ProfileView from '../Views/ProfileView.vue';
import TicketsView from '../Views/TicketsView.vue';
import LeadsView from '../Views/LeadsView.vue';
import LeadDetails from '../Views/LeadDetails.vue';
import Settings from '../Views/Settings.vue';


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView, // This should be the component to render for the home page
  },
  
  {
    path: '/marketingDollars',
    name: 'marketingDollars',
    component: MarketingDollarsView, // The component to render for the marketingDollards
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView, // The component to render for the profile
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketsView, // The component to render for the tickets
  },
  {
    path: '/leads',
    name: 'leads',
    component: LeadsView,
    props: true // The component to render for the leads
    
    
  },
  {
    path: '/lead-details/:id',
    name: 'leadDetails',
    component: LeadDetails,
    props: true // This allows the route parameters to be passed as props
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
