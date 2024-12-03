<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="widget bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold">User Statistics</h2>
        <!-- Add user statistics content here -->
      </div>
      <div class="widget bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold">Recent Activities</h2>
        <!-- Add recent activities content here -->
      </div>
      <div class="widget bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold">Notifications</h2>
        <!-- Add notifications content here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
.widget {
  min-height: 150px;
}
</style>