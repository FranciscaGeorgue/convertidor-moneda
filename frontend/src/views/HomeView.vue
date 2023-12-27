<script setup>

</script>

<template>
  <div class="navbar">
    <div class="nav-left">
      <router-link to="/">Converter</router-link>
    </div>
    <div class="nav-right">
      <ul>
        <!-- <li><router-link to="/auth/login">Login</router-link></li>
        <li><router-link to="/auth/register">Register</router-link></li> -->
      </ul>
    </div>
  </div>
  
  <h1>asass</h1>
  <div class="container">
      <div class="login-container">
        <div class="login-box">
          <h2>Login</h2>
          <form @submit.prevent="login">
            <label for="name">Username:</label>
            <input type="text" id="username" v-model="name" required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div class="login-container">
        <div class="login-box">
          <h2>Login</h2>
          <form @submit.prevent="login">
            <label for="name">Username:</label>
            <input type="text" id="username" v-model="name" required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
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
  vertical-align: top;
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
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }
  
  .login-box {
    width: 500px;
    padding: 100px;
    border: 1px solid #18181B;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #ccc;
    font-size: 200%;
  }

  h1 {
    color: #ccc;
    font-size: 200%;
    text-align: center;
    background-color: #242424;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
    color: #ccc;
  }
  
  input {
    padding: 8px;
    margin-bottom: 16px;
    background-color: #3B3B3B;
    border-radius: 8px;
  }
  
  button {
    padding: 10px;
    background-color: #646CFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
