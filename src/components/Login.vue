<template>
    <div id="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <button>Sign Up</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      handleLogin() {
        // Example logic for validation (replace with actual authentication)
        if (this.username === "admin" && this.password === "password") {
          this.$emit("login-success", this.username); // Emit event on successful login
        } else {
          this.errorMessage = "Invalid credentials, please try again.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #login {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  input {
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369c6c;
  }
  
  button[type="submit"] {
    width: 100%;
  }
  </style>
  