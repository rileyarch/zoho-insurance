<!-- src/components/LoginForm.vue -->
<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin" class="login-form">
        <h2>Login</h2>
        
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username"
            v-model="username"
            required
            autocomplete="username"
          />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password"
            v-model="password"
            required
            autocomplete="current-password"
          />
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            :disabled="isLoading"
          >
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>
        </div>
        
        <div class="help-text">
          <p>Use these fake credentials:</p>
          <ul>
            <li>Username: <code>admin</code> Password: <code>admin123</code></li>
            <li>Username: <code>user</code> Password: <code>user123</code></li>
          </ul>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    
    data() {
      return {
        username: '',
        password: '',
        isLoading: false,
        error: null
      }
    },
    
    methods: {
      handleLogin() {
        // Reset error state
        this.error = null;
        
        // Start loading state
        this.isLoading = true;
        
        // Simple validation
        if (!this.username || !this.password) {
          this.error = 'Please enter both username and password';
          this.isLoading = false;
          return;
        }
        
        // Simulate API call with setTimeout
        setTimeout(() => {
          // Check credentials (in a real app, this would be an API call)
          const validCredentials = [
            { username: 'admin', password: 'admin123' },
            { username: 'user', password: 'user123' }
          ];
          
          const isValid = validCredentials.some(
            cred => cred.username === this.username && cred.password === this.password
          );
          
          if (isValid) {
            // Success - emit event to parent component
            this.$emit('login-success', { username: this.username });
            this.$router.push('/');
          } else {
            // Failed login
            this.error = 'Invalid username or password';
          }
          
          // End loading state
          this.isLoading = false;
        }, 1000); // Simulate network delay
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .login-form {
    background: #f8f8f8;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-actions {
    margin-top: 20px;
  }
  
  button {
    padding: 10px 15px;
    background: #4c84ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background: #a0a0a0;
    cursor: not-allowed;
  }
  
  .error-message {
    padding: 10px;
    background: #ffeeee;
    border: 1px solid #ffcccc;
    color: #ff0000;
    margin-bottom: 15px;
    border-radius: 4px;
  }
  
  .help-text {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
    font-size: 0.9em;
    color: #666;
  }
  </style>