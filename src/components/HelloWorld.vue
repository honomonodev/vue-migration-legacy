<template>
  <div class="example-component p-4 bg-gray-100 rounded-lg">
    <h1 class="text-2xl font-bold text-gray-800">Example Component</h1>
    <p class="text-gray-600">This is a simple component styled with Tailwind CSS.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, Vue 3!');
</script>

<style scoped>
.example-component {
  padding: 20px;
}
</style>