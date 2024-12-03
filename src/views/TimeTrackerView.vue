<template>
    <DefaultLayout>
      <TimeTracker />
    </DefaultLayout>
  </template>
  
  <script>
  import TimeTracker from '@/components/TimeTracker.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  
  export default {
    name: 'TimeTrackerView',
    components: {
      TimeTracker,
      DefaultLayout
    }
  }
  </script>