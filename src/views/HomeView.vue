<template>
  <div class="home font-maven">
    <!-- Hero Section -->
    <section class="hero bg-blue-500 text-white py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Our Application</h1>
        <p class="text-lg mb-8">
          Experience the power of Vue.js and Tailwind CSS
        </p>
        <router-link to="/about">
          <button
            class="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Learn More
          </button>
        </router-link>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="cards py-20 bg-gray-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">Card Title 1</h2>
            <p class="text-gray-600">
              This is a description for card 1. Tailwind CSS makes it easy to
              style your components.
            </p>
          </div>
          <div class="card bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">Card Title 2</h2>
            <p class="text-gray-600">
              This is a description for card 2. Tailwind CSS makes it easy to
              style your components.
            </p>
          </div>
          <div class="card bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">Card Title 3</h2>
            <p class="text-gray-600">
              This is a description for card 3. Tailwind CSS makes it easy to
              style your components.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer bg-blue-500 text-white py-6">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Our Application. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  padding: 20px;
}
</style>
