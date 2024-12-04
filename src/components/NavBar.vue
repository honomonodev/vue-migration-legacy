<template>
  <nav class="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Brand Logo -->
      <div class="text-2xl font-bold text-white">
        <router-link to="/">Brand</router-link>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="text-white hover:text-gray-200"
          >Home</router-link
        >
        <router-link to="/profile" class="text-white hover:text-gray-200"
          >Profile</router-link
        >
      </div>

      <!-- Call-to-Action Button -->
      <div class="hidden md:block">
        <router-link to="/signup">
          <button
            class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Sign Up
          </button>
        </router-link>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <router-link to="/" class="block px-4 py-2 text-white hover:bg-gray-100"
        >Home</router-link
      >
      <router-link
        to="/profile"
        class="block px-4 py-2 text-white hover:bg-gray-100"
        >Profile</router-link
      >
      <router-link
        to="/signup"
        class="block px-4 py-2 text-white hover:bg-gray-100"
        >Sign Up</router-link
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
