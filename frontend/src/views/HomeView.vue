<script setup>

</script>

<template>
  <div class="navbar">
    <div class="nav-left">
      <router-link to="/">Converter</router-link>
    </div>
    <div class="nav-right">
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </div>
  </div>
  <div class="container">
    <!-- Contenido de la página aquí -->
    <!-- <div class="centered-div">
      <p>Contenido centrado</p>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #18181A;
  color: #646BFE;
}

.nav-left {
  display: flex;
}

.nav-right {
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos en el centro */
}

.nav-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-right li {
  margin-left: 10px; /* Espacio entre los elementos de la lista */
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Establece la altura mínima para ocupar toda la pantalla */
  background-color: #242424;
}

.centered-div {
  padding: 20px;
  border: 1px solid #242424;
  background-color: #242424;
}
</style>
