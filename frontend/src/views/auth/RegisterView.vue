<script>
import { useToast } from 'vue-toast-notification'

import AuthAPI from '../../api/AuthAPI'
import "vue-toast-notification/dist/theme-bootstrap.css"

const toast = useToast({
    duration: 5000,
    position: 'bottom-right'
})

export default {
  data() {
    return {
      username: '',
      password: '',
      isAdmin: false
    };
  },
  methods: {
    register() {
      // AuthAPI.register({ name: this.name, password: this.password, isAdmin: this.isAdmin })
      AuthAPI.register({ name: this.name, password: this.password })
      .then((response) => {
        toast.success(response.data.msg)
      })
      .catch((error) => {
        toast.error(error.response.data.msg)
      });
    }
  }
};
</script>

<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Registro</h2>
      <br>
        <form @submit.prevent="register">
          <label for="name">Usuario:</label>
          <input type="text" id="name" v-model="name" required>
  
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>

          <!-- <label for="isAdmin">Admin ? : 
          <input type="checkbox" id="isAdmin" v-model="isAdmin"> </label> -->
  
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  </template>

  <style scoped>
  .register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }
  
  .register-box {
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
  