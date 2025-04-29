<!-- src/views/HomeView.vue -->
<template>
  <div class="page-container">
    

    <div class="navbar-container">
     
    </div>

    <main class="main-content">
      <section class="content-section">
        <h2>Connection</h2>
        <div class="zoho-input">
        <label for="zoho-key">Zoho Key: </label>
        <input type="text" id="zoho-key" name="zoho-key" v-model="zohoKey">
        <label for="zoho-secret">Zoho Secret: </label>
        <input type="text" id="zoho-secret" name="zoho-secret" v-model="zohoSecret">
      </div>
      </section>

      <section class="content-section">
        <h2>Modules</h2>
        <div class="modules-container">
    <div class="module-card"
    v-for="(module,index) in modules"
    :key="index">
      <h3>{{  module.name }}</h3>
      <button
        class="toggle-btn"
        :class="{ on: module.enabled, off: !module.enabled }"
        @click="toggleModule(index)"
      >
        {{ module.enabled ? 'On' : 'Off' }}
      </button>
    </div>
  </div>
      </section>
    </main>

    
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  
  data () {
    return {
      modules: [
        { name: 'Leads', enabled: false },
        { name: 'Contacts', enabled: true }
      ],
      zohoKey :'',
      zohoSecret: ''
    }
  },
  methods: {
    toggleModule(index) {
      this.modules[index].enabled = !this.modules[index].enabled
    } }
  }


</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar-container {
  margin-left: 200px;
}

.main-content {
  flex-grow: 1;
  margin-left: 250px;
  
  padding: 80px 150px 15px;
  
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}

.content-section {
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.footer {
  margin-left: 200px;
}
.main-content h2{
text-align: left;

padding: 5px;
}
.zoho-input {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 10px;
  text-align: left;
  padding: 15px;
  font-family: sans-serif;
  font-size: large;
  font-weight: bold;
}
.modules-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.module-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.toggle-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  color: white;
}

.toggle-btn.on {
  background-color: #4caf50;
}

.toggle-btn.off {
  background-color: #f44336;
}

</style>
