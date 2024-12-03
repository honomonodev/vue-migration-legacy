<template>
    <DefaultLayout>
      <Login />
    </DefaultLayout>
  </template>
  
  <script>
  import Login from '@/components/Login.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  
  export default {
    name: 'LoginView',
    components: {
      Login,
      DefaultLayout
    }
  }
  </script>