<script setup>
    import { useRecordsStore } from '../stores/records.js'
    import * as XLSX from 'xlsx';

    const store = useRecordsStore()  
    console.log(store.records)
    console.log(Object.values(store.records)[0].activityDate)
    console.log(store.records[0].activityDate)

    const exportToExcel = async () => {
      const ws = XLSX.utils.json_to_sheet(store.records);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'history.xls');
    }
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
  
  <h1>Historial de conversiones</h1>
  <div class="container">
    <div>
        <button @click="exportToExcel">Exportar a Excel</button>
        <table>
        <thead>
            <tr>
            <th>FECHA ACTIVIDAD</th>
            <th>USUARIO</th>
            <th>MONTO ORIGEN</th>
            <th>FECHA CONVERSION</th>
            <th>VALOR MONEDA</th>
            <th>MONTO CONVERSION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in store.records" :key="record._id" :record="record">
            <td>{{ record.activityDate }}</td>
            <td>{{ record.user }}</td>
            <td>{{ record.amount }} UF</td>
            <td>{{ record.convertionDate }}</td>
            <td>${{ record.coinValue }}</td>
            <td>${{ record.finalAmount }}</td>
            </tr>
        </tbody>
        </table>
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Estilos para las celdas de encabezado */
th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

/* Estilos para las celdas de datos */
td {
  border: 1px solid #ddd;
  padding: 10px;
}

/* Estilos para las filas impares (opcional) */
tr:nth-child(odd) {
  background-color: #f9f9f9;
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
