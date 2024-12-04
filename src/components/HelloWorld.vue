<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Hello, Vue 3!');
</script>

<style scoped>
.hello {
  padding: 20px;
}
</style>