<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/" active-class="active">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/leads" active-class="active">Leads</router-link>
      </li>
      <li>
        <router-link to="/tickets" active-class="active">Tickets</router-link>
      </li>
      <li>
        <router-link to="/marketingDollars" active-class="active">Marketing Dollars</router-link>
      </li>
      <li>
        <router-link to="/profile" active-class="active">Profile</router-link>
      </li>
      <li>
        <router-link to="/about" active-class="active">About</router-link>
      </li>

      <!-- Log Out button on the far right -->
      <li class="logout">
        <button @click="logout">Log Out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarTemplate",
  methods: {
    logout() {
      // Handle the logout logic here
      console.log('Logged out');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #4a5dcb;
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: large;
  border-radius: 20px;
}

.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  width: 100%;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar .active {
  background-color: white;
  color: #4a5dcb;
  border-radius: 5px;
  padding: 10px;
}

.logout {
  margin-left: auto;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>
