<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 font-maven">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-6">Welcome to Our Application</h1>
      <p class="text-lg text-gray-600 mb-8">Experience the power of Vue.js and Tailwind CSS</p>
      <div class="space-x-4">
        <router-link to="/login">
          <button class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </router-link>
        <router-link to="/register">
          <button class="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">Register</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Add any additional styles here */
</style>