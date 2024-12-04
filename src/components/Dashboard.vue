<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <nav class="mt-6">
        <ul>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span class="ml-2">Home</span>
            </a>
          </li>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span class="ml-2">Profile</span>
            </a>
          </li>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span class="ml-2">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- User Statistics -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold text-gray-800">User Statistics</h2>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Total Users</span>
              <span class="text-gray-800 font-bold">1,234</span>
            </div>
            <div class="flex items-center justify-between mt-2">
              <span class="text-gray-600">Active Users</span>
              <span class="text-gray-800 font-bold">567</span>
            </div>
          </div>
        </div>

        <!-- Recent Activities -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold text-gray-800">Recent Activities</h2>
          <ul class="mt-4">
            <li class="flex items-center justify-between py-2 border-b">
              <span class="text-gray-600">User A logged in</span>
              <span class="text-gray-800">2 hours ago</span>
            </li>
            <li class="flex items-center justify-between py-2 border-b">
              <span class="text-gray-600">User B updated profile</span>
              <span class="text-gray-800">4 hours ago</span>
            </li>
            <li class="flex items-center justify-between py-2">
              <span class="text-gray-600">User C posted a comment</span>
              <span class="text-gray-800">6 hours ago</span>
            </li>
          </ul>
        </div>

        <!-- Notifications -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold text-gray-800">Notifications</h2>
          <ul class="mt-4">
            <li class="flex items-center justify-between py-2 border-b">
              <span class="text-gray-600">New message from User D</span>
              <span class="text-gray-800">1 hour ago</span>
            </li>
            <li class="flex items-center justify-between py-2 border-b">
              <span class="text-gray-600">System update available</span>
              <span class="text-gray-800">3 hours ago</span>
            </li>
            <li class="flex items-center justify-between py-2">
              <span class="text-gray-600">New comment on your post</span>
              <span class="text-gray-800">5 hours ago</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
};
</script>

<style scoped>
/* Add any additional styles here */
</style>