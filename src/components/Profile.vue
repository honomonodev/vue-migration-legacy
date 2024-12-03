<template>
    <div class="profile">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>
      <form @submit.prevent="updateProfile">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input type="text" v-model="name" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" class="w-full p-2 border rounded" required>
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        name: '',
        email: ''
      }
    },
    methods: {
      updateProfile() {
        // Implement profile update logic here
      }
    }
  }
  </script>
  
  <style scoped>
  .profile {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>