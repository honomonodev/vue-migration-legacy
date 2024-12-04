<template>
  <div class="home font-maven">
    <!-- Hero Section -->
    <section
      class="hero bg-cover h-screen w-full bg-center text-white py-20"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }"
    >
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Our Application</h1>
        <p class="text-lg mb-8">
          Experience the power of Vue.js and Tailwind CSS
        </p>
        <router-link to="/about">
          <button
            class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </button>
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-20 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature bg-white p-6 rounded-lg shadow-md text-center">
            <div class="icon mb-4">
              <svg
                class="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Feature 1</h3>
            <p class="text-gray-600">
              Description of feature 1. Tailwind CSS makes it easy to style your
              components.
            </p>
          </div>
          <div class="feature bg-white p-6 rounded-lg shadow-md text-center">
            <div class="icon mb-4">
              <svg
                class="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Feature 2</h3>
            <p class="text-gray-600">
              Description of feature 2. Tailwind CSS makes it easy to style your
              components.
            </p>
          </div>
          <div class="feature bg-white p-6 rounded-lg shadow-md text-center">
            <div class="icon mb-4">
              <svg
                class="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Feature 3</h3>
            <p class="text-gray-600">
              Description of feature 3. Tailwind CSS makes it easy to style your
              components.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div class="flex justify-center -mt-16 md:justify-end">
              <img
                class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>
            <h2
              class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"
            >
              Design Tools
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
            <div class="flex justify-end mt-4">
              <a
                href="#"
                class="text-lg font-medium text-blue-600 dark:text-blue-300"
                tabindex="0"
                role="link"
                >John Doe</a
              >
            </div>
          </div>
          <div
            class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div class="flex justify-center -mt-16 md:justify-end">
              <img
                class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>
            <h2
              class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"
            >
              Design Tools
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
            <div class="flex justify-end mt-4">
              <a
                href="#"
                class="text-lg font-medium text-blue-600 dark:text-blue-300"
                tabindex="0"
                role="link"
                >John Doe</a
              >
            </div>
          </div>
          <div
            class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div class="flex justify-center -mt-16 md:justify-end">
              <img
                class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>
            <h2
              class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"
            >
              Design Tools
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
            <div class="flex justify-end mt-4">
              <a
                href="#"
                class="text-lg font-medium text-blue-600 dark:text-blue-300"
                tabindex="0"
                role="link"
                >John Doe</a
              >
            </div>
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
  padding: 0px;
}
</style>
