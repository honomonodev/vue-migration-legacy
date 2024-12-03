<template>
  <DefaultLayout>
    <Dashboard />
  </DefaultLayout>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'DashboardView',
  components: {
    Dashboard,
    DefaultLayout
  }
}
</script>