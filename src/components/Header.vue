<template>
  <header class="header">
    <h1>Put header here.</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderTemplate",
};
</script>

<style scoped>
.header {
  background-color: #4a5dcb;
  color: white;
  font-weight: bold;
  font-size: large;
 
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 120px;
}
</style>
