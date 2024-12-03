<template>
    <div class="login">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" v-model="password" class="w-full p-2 border rounded" required>
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Implement login logic here
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>