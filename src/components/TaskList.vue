<template>
    <div class="task-list">
      <h1 class="text-2xl font-bold mb-4">Tasks</h1>
      <form @submit.prevent="addTask" class="mb-4">
        <input type="text" v-model="newTask" class="w-full p-2 border rounded" placeholder="New task" required>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded mt-2">Add Task</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="mb-2">
          <span>{{ task.name }}</span>
          <button @click="removeTask(task.id)" class="bg-red-500 text-white p-1 rounded ml-2">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    data() {
      return {
        newTask: '',
        tasks: []
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ id: Date.now(), name: this.newTask });
          this.newTask = '';
        }
      },
      removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  .task-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>