<template>
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  </template>
  
  <script>
  import Profile from '@/components/Profile.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  
  export default {
    name: 'ProfileView',
    components: {
      Profile,
      DefaultLayout
    }
  }
  </script>