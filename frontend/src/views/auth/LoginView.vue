<script>
  import { useToast } from 'vue-toast-notification'
  import { useRouter } from 'vue-router'

  import AuthAPI from '../../api/AuthAPI'
  import "vue-toast-notification/dist/theme-bootstrap.css"

  const toast = useToast({
    duration: 5000,
    position: 'bottom-right'
  })
  const router = useRouter()

  export default {
    data() {
      return {
      username: '',
      password: ''
      };
    },
    methods: {
      login() {
        AuthAPI.login({ name: this.name, password: this.password })
        .then((response) => {
          toast.success(response.data.msg)
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          toast.error(error.response.data.msg)
        });
      }
    }
  };
</script>

<template>
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
</template>
  
  <style scoped>
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
  
