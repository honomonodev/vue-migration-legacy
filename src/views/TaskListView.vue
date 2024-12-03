<template>
    <DefaultLayout>
      <TaskList />
    </DefaultLayout>
  </template>
  
  <script>
  import TaskList from '@/components/TaskList.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  
  export default {
    name: 'TaskListView',
    components: {
      TaskList,
      DefaultLayout
    }
  }
  </script>