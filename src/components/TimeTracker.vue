<template>
    <div class="time-tracker">
      <h1 class="text-2xl font-bold mb-4">Time Tracker</h1>
      <form @submit.prevent="logTime" class="mb-4">
        <input type="text" v-model="task" class="w-full p-2 border rounded" placeholder="Task" required>
        <input type="number" v-model="hours" class="w-full p-2 border rounded mt-2" placeholder="Hours" required>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded mt-2">Log Time</button>
      </form>
      <ul>
        <li v-for="entry in timeEntries" :key="entry.id" class="mb-2">
          <span>{{ entry.task }} - {{ entry.hours }} hours</span>
          <button @click="removeEntry(entry.id)" class="bg-red-500 text-white p-1 rounded ml-2">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimeTracker',
    data() {
      return {
        task: '',
        hours: '',
        timeEntries: []
      }
    },
    methods: {
      logTime() {
        if (this.task.trim() && this.hours > 0) {
          this.timeEntries.push({ id: Date.now(), task: this.task, hours: this.hours });
          this.task = '';
          this.hours = '';
        }
      },
      removeEntry(id) {
        this.timeEntries = this.timeEntries.filter(entry => entry.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  .time-tracker {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>