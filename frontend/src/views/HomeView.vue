<script>
  import { useToast } from 'vue-toast-notification'
  import { useRouter } from 'vue-router'

  import AuthAPI from '../api/AuthAPI'
  import "vue-toast-notification/dist/theme-bootstrap.css"

  const toast = useToast({
    duration: 5000,
    position: 'bottom-right'
  })

  export default {
    data() {
      return {
        montoConversion: '',
        valorMoneda: '',
        fechaConversion: '',
        monto:''
      };
    },
    methods: {
      converter() {
        console.log({ date: this.date, uf: this.uf })
        AuthAPI.converter({ date: this.date, uf: this.uf })
        .then((response) => {
          console.log(response.data.UFs[0].Valor)
          this.valorMoneda = parseFloat(response.data.UFs[0].Valor)
          this.montoConversion = parseFloat(this.uf)
          this.fechaConversion = this.date
          this.monto = this.valorMoneda * this.montoConversion
        })
        .catch((error) => {
          console.log(error)
        });
      }
    }
  };
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
  
  <h1>Convertidor de UF a CLP</h1>
  <div class="container">
      <div class="uf-container">
        <div class="uf-box">
          <h2></h2>
          <form @submit.prevent="converter">
            <label for="date">Fecha:</label>
            <input type="date" id="date" v-model="date" required>

            <label for="uf">UF:</label>
            <input type="uf" id="uf" v-model="uf" required>

            <button type="submit">Convertir a CLP</button>
          </form>
        </div>
      </div>
      <div class="uf-container">
        <div class="uf-box">
          <h2></h2>
          <ul>
            <li><Label>Monto conversión: </Label>{{ montoConversion }}</li>
            <li><Label>Valor moneda: </Label>{{ valorMoneda }}</li>
            <li><Label>Fecha conversión: </Label>{{ fechaConversion }}</li>
            <li><Label>Monto: </Label>{{ monto }}</li>
            <br>
            <button type="button">Ver historial</button>
          </ul>
        </div>
      </div>
  </div>
</template>
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
.uf-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }
  
  .uf-box {
    width: 500px;
    padding: 100px;
    border: 1px solid #18181B;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);    
    color: #ccc;
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
    background-color: #646CFF !important;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
